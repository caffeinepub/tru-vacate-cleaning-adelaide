import Map "mo:core/Map";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import List "mo:core/List";
import Order "mo:core/Order";
import Iter "mo:core/Iter";

actor {
  type FormSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    serviceType : Text;
    timestamp : Time.Time;
  };

  module FormSubmission {
    public func compare(a : FormSubmission, b : FormSubmission) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  var idCounter = 0;

  let storage = Map.empty<Nat, FormSubmission>();

  public shared ({ caller }) func submitForm(name : Text, email : Text, phone : Text, serviceType : Text, message : Text) : async () {
    let newId = idCounter;
    idCounter += 1;
    let formSubmission : FormSubmission = {
      id = newId;
      name;
      email;
      phone;
      serviceType;
      message;
      timestamp = Time.now();
    };
    storage.add(newId, formSubmission);
  };

  public query ({ caller }) func getAllForms() : async [FormSubmission] {
    storage.values().toArray().sort();
  };

  public query ({ caller }) func searchFormsByName(searchText : Text) : async [FormSubmission] {
    let filtered = List.empty<FormSubmission>();

    for ((_, entry) in storage.entries()) {
      if (entry.name.contains(#text searchText)) {
        filtered.add(entry);
      };
    };

    filtered.toArray();
  };

  public query ({ caller }) func searchFormsByServiceType(serviceType : Text) : async [FormSubmission] {
    let results : [FormSubmission] = storage.values().toArray().filter(
      func(entry) {
        Text.equal(entry.serviceType, serviceType);
      }
    );
    results.sort();
  };

  public shared ({ caller }) func deleteForm(id : Nat) : async () {
    if (id >= idCounter) {
      Runtime.trap("Id does not exist");
    };

    storage.remove(id);
  };

  public query ({ caller }) func getFilteredFormsByTimestamp(days : Nat) : async [FormSubmission] {
    let now = Time.now();
    let daysToNanoseconds = 1_000_000_000 * 60 * 60 * 24 * days;
    let results : [FormSubmission] = storage.values().toArray().filter(
      func(entry) {
        now - (entry.timestamp + daysToNanoseconds : Int) < 0;
      }
    );
    results.sort();
  };
};

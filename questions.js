// =====================================================================
//  SF APEX DEVELOPER ASSESSMENT — Question Bank
//  Fixed 45 questions: 20 Scenario + 20 MCQ + 5 Live Coding
//  Topics: Apex Core + Apex Triggers
//  Questions appear in fixed order — no randomisation
// =====================================================================

const QUESTIONS = [

  // ══════════════════════════════════════════════════════════════
  //  PART 1 — SCENARIO / DESCRIPTIVE  (Q1 – Q20)
  // ══════════════════════════════════════════════════════════════

  {
    "id": 1,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Apex Triggers — Before and After Triggers",
    "scenario": "A company wants to automatically convert the Account Name into uppercase before saving a new Account record. Additionally, whenever an Account is created, a related Contact record should be created automatically.",
    "question": "Which trigger events would you use to implement both requirements? Explain the difference between Before and After triggers and when each should be used.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 2,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Apex Trigger Events — Insert, Update, Delete and Undelete",
    "scenario": "A company wants to maintain the total number of active Contacts related to each Account. The count should increase when a Contact is inserted or restored from the Recycle Bin and decrease when a Contact is deleted.",
    "question": "Which Apex trigger events would you use to handle these operations? Explain how Insert, Update, Delete, and Undelete trigger events work and how you would maintain the correct Contact count.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 3,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Apex Triggers — Update Trigger",
    "scenario": "A company wants to create an Opportunity History custom record whenever an Opportunity Stage is changed. The history record should contain the previous Stage, new Stage, Opportunity Name, and modification date. No history record should be created when other Opportunity fields are updated.",
    "question": "How would you implement this requirement using an Apex Update Trigger? Explain how Trigger.oldMap and Trigger.new can be used to identify changes in field values.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 4,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Apex Triggers — Delete and Undelete",
    "scenario": "A company wants to prevent users from deleting an Account if it has any related Opportunities in the Closed Won stage. However, if an Account is deleted and later restored, the company wants to update a custom field indicating that the Account was recovered.",
    "question": "Which Apex trigger events and context variables would you use to implement these requirements? Explain how addError() can prevent record deletion.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 5,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Apex Triggers — Bulkification",
    "scenario": "A company inserts 200 Account records in a single transaction. Whenever an Account is created, the system must create three related Contacts for each Account. The current trigger executes a SOQL query and performs DML operations inside a for loop, resulting in governor limit exceptions.",
    "question": "How would you redesign this trigger using Apex bulkification best practices? Explain the use of collections, SOQL outside loops, and bulk DML operations.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 6,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Governor Limits and Trigger Best Practices",
    "scenario": "A company has multiple Apex triggers and helper classes executing during a single transaction. Users are receiving Too Many SOQL Queries and Too Many DML Statements exceptions while performing bulk updates.",
    "question": "What are Salesforce Governor Limits, and how would you identify and resolve these exceptions? Explain the best practices you would follow while designing Apex Triggers.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 7,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Apex Testing — Introduction to Test Classes",
    "scenario": "A developer has completed an Apex class that creates an Account and related Contacts. Before deploying the class to production, the developer needs to verify that the functionality works correctly.",
    "question": "Why are Apex Test Classes required in Salesforce? Explain how you would write a test class using @isTest, Test.startTest(), Test.stopTest(), and System.assertEquals().",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 8,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Apex Testing — Unit Testing",
    "scenario": "A developer has written an Apex method that calculates a discount based on the Opportunity Amount. The method supports different discount percentages depending on the amount range. The developer wants to verify all possible scenarios.",
    "question": "How would you write unit test methods to validate the different discount conditions? Explain positive testing, negative testing, boundary testing, and the use of assertions.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 9,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Apex Testing — Trigger Test Classes",
    "scenario": "A Contact trigger prevents duplicate Contacts based on Email and Phone. The trigger also updates a custom Contact Count field on the related Account whenever Contacts are inserted or deleted.",
    "question": "How would you write a test class to validate this trigger functionality? Explain how you would test successful insertions, duplicate record prevention, deletion, and Account count updates.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 10,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Apex Testing — Test Data Factory",
    "scenario": "A development team has 15 Apex test classes, and every test class independently creates Accounts, Contacts, Opportunities, and custom object records. Maintaining test data across all these classes has become difficult.",
    "question": "How would you implement a Test Data Factory to create reusable test records? Explain how a factory class improves code reusability, maintainability, and test data preparation.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 11,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Apex Testing — Test Data Preparation",
    "scenario": "A developer is writing a test class for an Apex method that retrieves Accounts based on Industry and Rating. The test class works in the developer's environment but fails in another Salesforce organization because the required Account records are not available.",
    "question": "Why should test classes create their own test data instead of depending on existing organization records? Explain the purpose of @testSetup, SeeAllData=false, and reusable test data preparation methods.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 12,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Async Apex — Future Methods",
    "scenario": "Whenever an Account is updated, the company wants to send its Account details to an external application through an HTTP callout. The callout should execute asynchronously so that the main transaction does not wait for the external system.",
    "question": "How would you implement this requirement using a Future Method? Explain the use of @future(callout=true), static methods, supported parameter types, and the limitations of Future Methods.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 13,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Async Apex — Batch Apex",
    "scenario": "A company has more than 500,000 Contact records and wants to update a custom field called Customer_Status__c for all Contacts based on their Account Industry. Processing all records synchronously causes governor limit exceptions.",
    "question": "How would you implement this requirement using Batch Apex? Explain the purpose of start(), execute(), and finish() methods, Database.QueryLocator, and batch scope size.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 14,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Async Apex — Schedulable Apex",
    "scenario": "A company wants to execute an Apex process every day at midnight to identify Accounts that have not been modified for the last 90 days and update their status to Inactive.",
    "question": "How would you implement this requirement using Schedulable Apex? Explain the use of the Schedulable interface, execute() method, System.schedule(), and Cron expressions.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 15,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Async Apex — Queueable Apex",
    "scenario": "A company needs to process a group of Account records asynchronously. During processing, the system must pass a complex data structure containing Account details and related Contact information to the asynchronous process. The process may also need to chain another asynchronous job.",
    "question": "How would you implement this requirement using Queueable Apex? Explain the Queueable interface, execute() method, System.enqueueJob(), job chaining, and how Queueable Apex differs from Future Methods.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 16,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Async Apex — Monitoring and Troubleshooting",
    "scenario": "A developer has scheduled a Batch Apex job to process 100,000 records. The job was submitted successfully, but some records are not updated, and the developer wants to identify whether the job completed, failed, or is still processing.",
    "question": "How would you monitor and troubleshoot asynchronous Apex jobs? Explain the use of Apex Jobs, AsyncApexJob, CronTrigger, and relevant job status information.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 17,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Integration using Apex — REST Callouts",
    "scenario": "A company wants to integrate Salesforce with an external employee management application. Salesforce must send employee details through an HTTP POST request and receive employee information in JSON format.",
    "question": "How would you implement this integration using Apex REST Callouts? Explain HttpRequest, HttpResponse, Http, HTTP methods, JSON serialization, and JSON deserialization.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 18,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Integration using Apex — SOAP Callouts",
    "scenario": "A company uses an external banking application that exposes its services through SOAP Web Services. Salesforce must invoke the banking service to retrieve payment details and process the response.",
    "question": "How would you integrate Salesforce with the external SOAP service using Apex? Explain WSDL, WSDL2Apex, generated Apex classes, and how SOAP callouts differ from REST callouts.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 19,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Integration using Apex — Named Credentials and OAuth 2.0",
    "scenario": "A company wants to connect Salesforce to a third-party REST API that requires OAuth 2.0 authentication. The current implementation stores the API endpoint, client credentials, and access token directly inside an Apex class.",
    "question": "How would you redesign this integration using Named Credentials, External Credentials, and OAuth 2.0? Explain how these features improve authentication, security, and maintainability.",
    "placeholder": "Enter your answer..."
  },
  {
    "id": 20,
    "part": "Part 1 — Scenario Questions",
    "type": "scenario",
    "category": "Integration using Apex — Connected Apps",
    "scenario": "An external application wants to authenticate with Salesforce and access Salesforce records through REST APIs. The company wants to configure a secure authentication mechanism instead of sharing Salesforce usernames and passwords.",
    "question": "How would you configure a Connected App for this integration? Explain the purpose of OAuth 2.0, Consumer Key, Consumer Secret, callback URL, OAuth scopes, and access tokens.",
    "placeholder": "Enter your answer..."
  },

  // ══════════════════════════════════════════════════════════════
  //  PART 2 — MCQ  (Q21 – Q40)
  // ══════════════════════════════════════════════════════════════

   {
    "id": 21,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Apex Triggers — Before and After",
    "scenario": "A developer wants to update the Account Name before the Account record is saved into the database. The developer does not want to perform an additional DML operation.",
    "question": "Which Apex Trigger event should be used?",
    "options": [
      "After Insert",
      "Before Insert",
      "After Update",
      "After Delete"
    ],
    "answer": 1
  },
  {
    "id": 22,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Apex Trigger Events",
    "scenario": "A developer wants to access the records that are being deleted and perform additional processing before they are permanently removed.",
    "question": "Which trigger context variable contains the records being deleted?",
    "options": [
      "Trigger.new",
      "Trigger.newMap",
      "Trigger.old",
      "Trigger.newMap and Trigger.oldMap"
    ],
    "answer": 2
  },
  {
    "id": 23,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Apex Triggers",
    "scenario": "A user accidentally deletes a Contact and later restores it from the Recycle Bin. The developer wants to execute additional logic when the Contact is restored.",
    "question": "Which Apex Trigger event is executed when a record is restored from the Recycle Bin?",
    "options": [
      "After Insert",
      "Before Update",
      "After Undelete",
      "Before Delete"
    ],
    "answer": 2
  },
  {
    "id": 24,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Bulkification and Governor Limits",
    "scenario": "A developer writes an Apex Trigger that processes 200 Account records. The trigger performs one SOQL query for every Account inside a for loop.",
    "question": "What is the best practice to avoid exceeding the SOQL query governor limit?",
    "options": [
      "Increase the SOQL query limit",
      "Move SOQL queries outside loops and use collections",
      "Use multiple triggers for the same object",
      "Execute a separate transaction for every Account"
    ],
    "answer": 1
  },
  {
    "id": 25,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Apex Testing",
    "scenario": "A developer has written an Apex class and wants to create a test class to validate its functionality before deployment.",
    "question": "Which annotation is used to identify an Apex test class?",
    "options": [
      "@AuraEnabled",
      "@Future",
      "@isTest",
      "@InvocableMethod"
    ],
    "answer": 2
  },
  {
    "id": 26,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Apex Testing",
    "scenario": "A developer wants to isolate the execution of the actual code being tested from the test data preparation portion to get accurate governor limit measurements.",
    "question": "Which methods are used to define the test execution boundary?",
    "options": [
      "Test.begin() and Test.end()",
      "Test.startTest() and Test.stopTest()",
      "System.start() and System.stop()",
      "Test.execute() and Test.finish()"
    ],
    "answer": 1
  },
  {
    "id": 27,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Apex Testing",
    "scenario": "A test method executes an Apex method that calculates a discount. The developer wants to verify whether the actual discount is equal to the expected discount.",
    "question": "Which System method should be used to compare the expected and actual values?",
    "options": [
      "System.debug()",
      "System.assertEquals()",
      "System.addError()",
      "System.enqueueJob()"
    ],
    "answer": 1
  },
  {
    "id": 28,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Apex Testing",
    "scenario": "A Contact trigger prevents duplicate Contacts based on Email. A developer wants to verify that inserting a duplicate Contact throws an error.",
    "question": "Which approach should be used to verify the expected exception or DML error in the test class?",
    "options": [
      "Use Test.isRunningTest()",
      "Use Database.insert() with allOrNone=false and verify the SaveResult error",
      "Use System.debug() only",
      "Use Test.startTest() without assertions"
    ],
    "answer": 1
  },
  {
    "id": 29,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Apex Testing",
    "scenario": "A development team has multiple test classes that require Account, Contact, and Opportunity records. The team wants to avoid writing the same test data creation logic repeatedly.",
    "question": "Which approach is most appropriate?",
    "options": [
      "Create all records manually in every test method",
      "Use existing production records",
      "Create a reusable Test Data Factory class",
      "Disable test data creation"
    ],
    "answer": 2
  },
  {
    "id": 30,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Apex Testing",
    "scenario": "A developer wants to create common test records once and reuse them across multiple test methods within the same test class.",
    "question": "Which annotation should be used for the common test data creation method?",
    "options": [
      "@testSetup",
      "@AuraEnabled",
      "@Future",
      "@InvocableMethod"
    ],
    "answer": 0
  },
  {
    "id": 31,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Async Apex",
    "scenario": "A developer wants to execute an HTTP callout asynchronously from Apex using a Future Method.",
    "question": "Which annotation should be used to allow a Future Method to perform HTTP callouts?",
    "options": [
      "@future",
      "@future(callout=true)",
      "@isTest",
      "@AuraEnabled"
    ],
    "answer": 1
  },
  {
    "id": 32,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Async Apex",
    "scenario": "A company needs to process 300,000 Account records asynchronously. The developer wants to divide the records into smaller groups for processing.",
    "question": "Which Batch Apex method is responsible for processing each group of records?",
    "options": [
      "start()",
      "execute()",
      "finish()",
      "schedule()"
    ],
    "answer": 1
  },
  {
    "id": 33,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Async Apex",
    "scenario": "A developer implements Batch Apex and wants to retrieve a large number of records for processing without being restricted by the normal SOQL query row limit.",
    "question": "Which return type can be used in the start() method to retrieve up to 50 million records?",
    "options": [
      "List<sObject>",
      "Set<Id>",
      "Database.QueryLocator",
      "Map<Id, sObject>"
    ],
    "answer": 2
  },
  {
    "id": 34,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Async Apex",
    "scenario": "A company wants to execute an Apex class automatically every Sunday at midnight.",
    "question": "Which interface should the Apex class implement to schedule its execution?",
    "options": [
      "Database.Batchable",
      "Queueable",
      "Schedulable",
      "Database.Stateful"
    ],
    "answer": 2
  },
  {
    "id": 35,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Async Apex",
    "scenario": "A developer needs to execute an asynchronous process that accepts a complex Apex object as input and wants to monitor the execution through a job ID.",
    "question": "Which method is used to submit a Queueable Apex job?",
    "options": [
      "System.schedule()",
      "System.enqueueJob()",
      "Database.executeBatch()",
      "System.future()"
    ],
    "answer": 1
  },
  {
    "id": 36,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Async Apex",
    "scenario": "A developer has submitted a Queueable Apex job and wants to check whether the job is queued, processing, completed, or failed.",
    "question": "Which Salesforce object stores information about asynchronous Apex jobs?",
    "options": [
      "CronTrigger",
      "AsyncApexJob",
      "ApexClass",
      "ApexTestResult"
    ],
    "answer": 1
  },
  {
    "id": 37,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Integration using Apex",
    "scenario": "A developer wants to send an HTTP request from Salesforce to an external REST API and receive the response.",
    "question": "Which Apex classes are commonly used to perform an HTTP callout?",
    "options": [
      "Http, HttpRequest, and HttpResponse",
      "Database, QueryLocator, and SaveResult",
      "System, Test, and Assert",
      "JSON, Schema, and Trigger"
    ],
    "answer": 0
  },
  {
    "id": 38,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Integration using Apex",
    "scenario": "A company receives a WSDL file from an external banking application and wants to generate Apex classes to invoke its SOAP services.",
    "question": "Which Salesforce tool is used to generate Apex classes from a WSDL file?",
    "options": [
      "Schema Builder",
      "WSDL2Apex",
      "Developer Console",
      "Object Manager"
    ],
    "answer": 1
  },
  {
    "id": 39,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Integration using Apex",
    "scenario": "A developer has hardcoded an external API endpoint and authentication details inside an Apex class. The company wants to securely manage the endpoint and authentication configuration.",
    "question": "Which Salesforce feature is recommended for managing external endpoint and authentication configuration?",
    "options": [
      "Custom Labels",
      "Named Credentials",
      "Static Resources",
      "Custom Settings only"
    ],
    "answer": 1
  },
  {
    "id": 40,
    "part": "Part 2 — Multiple Choice Questions",
    "type": "mcq",
    "category": "Integration using Apex",
    "scenario": "An external application needs to authenticate with Salesforce using OAuth 2.0 and access Salesforce data through REST APIs.",
    "question": "Which Salesforce feature should be configured to enable this OAuth-based integration?",
    "options": [
      "Connected App",
      "Validation Rule",
      "Record Type",
      "Page Layout"
    ],
    "answer": 0
  },

  // ══════════════════════════════════════════════════════════════
  //  PART 3 — LIVE CODING — TRIGGERS  (Q41 – Q45)
  // ══════════════════════════════════════════════════════════════

  {
  id: 41,
  part: "Part 3 — Live Coding",
  type: "coding",
  category: "Trigger — Before Insert",
  language: "Apex",
  file: "ContactTrigger.cls",
  scenario: "Whenever a Contact is created, if the Department field is blank, it should automatically be populated with 'General'. The solution should support bulk inserts.",
  question: "Write a before insert Apex trigger named ContactDepartmentTrigger that sets the default Department field value.",
  placeholder: "",
  hint: ""
},
{
  id: 42,
  part: "Part 3 — Live Coding",
  type: "coding",
  category: "Trigger — After Update",
  language: "Apex",
  file: "OpportunityTrigger.cls",
  scenario: "Whenever an Opportunity Stage changes to 'Closed Won', update the related Account Description field with 'Won Customer'. The solution should work for bulk updates.",
  question: "Write a bulkified after update Apex trigger named OpportunityAccountUpdateTrigger to update the related Account Description.",
  placeholder: "",
  hint: ""
},
{
  id: 43,
  part: "Part 3 — Live Coding",
  type: "coding",
  category: "Future Method",
  language: "Apex",
  file: "AccountFuture.cls",
  scenario: "Whenever an Account Id is passed to a Future Method, update the Account Description field to 'Processed by Future Method'.",
  question: "Write a Future Method class named AccountFuture that updates the Description field for the given Account Id.",
  placeholder: "",
  hint: ""
},
{
  id: 44,
  part: "Part 3 — Live Coding",
  type: "coding",
  category: "Queueable Apex",
  language: "Apex",
  file: "AccountQueueable.cls",
  scenario: "A list of Account Ids should be processed asynchronously. For each Account, update the Rating field to 'Warm'.",
  question: "Write a Queueable Apex class named AccountQueueable that updates the Rating field for all provided Account records.",
  placeholder: "",
  hint: ""
},
{
  id: 45,
  part: "Part 3 — Live Coding",
  type: "coding",
  category: "Batch Apex",
  language: "Apex",
  file: "ContactBatch.cls",
  scenario: "Update the Mailing City of all Contacts to 'Hyderabad'. The solution should process records in batches.",
  question: "Write a Batch Apex class named ContactBatch that updates the Mailing City field for all Contact records.",
  placeholder: "",
  hint: ""
}

];

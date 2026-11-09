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
  id: 1,
  part: "Part 1 — Scenario Questions",
  type: "scenario",
  category: "Introduction to Test Classes",
  scenario: "A developer creates an Apex class but forgets to write a corresponding test class. During deployment to production, the deployment fails.",
  question: "Why is a test class required before deploying Apex code to production? What is the minimum code coverage required, and how is it calculated?",
  placeholder: "Enter your answer..."
},
{
  id: 2,
  part: "Part 1 — Scenario Questions",
  type: "scenario",
  category: "Unit Testing",
  scenario: "A test method inserts an Account and updates it, but no assertions are written. The test passes successfully.",
  question: "Why are assertions important in Apex test classes? Write two assertions you would use to verify the Account update.",
  placeholder: "Enter your answer..."
},
{
  id: 3,
  part: "Part 1 — Scenario Questions",
  type: "scenario",
  category: "Test Classes for Apex Triggers",
  scenario: "An after insert trigger creates a Task whenever an Account is created. The trigger has 90% code coverage but the Task creation logic is never verified.",
  question: "How would you write a test class to verify that the trigger creates the Task correctly? Which assertions would you use?",
  placeholder: "Enter your answer..."
},
{
  id: 4,
  part: "Part 1 — Scenario Questions",
  type: "scenario",
  category: "Test Data Factory",
  scenario: "Five different test classes create the same Account and Contact records repeatedly, resulting in duplicated code.",
  question: "How can a Test Data Factory class solve this problem? Explain its advantages and write the approach you would follow.",
  placeholder: "Enter your answer..."
},
{
  id: 5,
  part: "Part 1 — Scenario Questions",
  type: "scenario",
  category: "Future Methods",
  scenario: "A trigger performs an HTTP callout after an Opportunity is inserted. The transaction fails with a callout exception.",
  question: "Why can't a synchronous trigger perform this operation? How would a Future Method solve the problem? Mention its limitations.",
  placeholder: "Enter your answer..."
},
{
  id: 6,
  part: "Part 1 — Scenario Questions",
  type: "scenario",
  category: "Queueable Apex",
  scenario: "A developer needs to process thousands of Account records asynchronously and also pass complex objects to the job.",
  question: "Why is Queueable Apex a better choice than Future Methods for this requirement? Explain the advantages.",
  placeholder: "Enter your answer..."
},
{
  id: 7,
  part: "Part 1 — Scenario Questions",
  type: "scenario",
  category: "Batch Apex",
  scenario: "An organization needs to update 2 million Account records overnight.",
  question: "Why should Batch Apex be used instead of a normal Apex class? Explain the purpose of the start(), execute(), and finish() methods.",
  placeholder: "Enter your answer..."
},
{
  id: 8,
  part: "Part 1 — Scenario Questions",
  type: "scenario",
  category: "Schedulable Apex",
  scenario: "Every Monday at 8:00 AM, expired Opportunities must be archived automatically.",
  question: "How would you schedule this job using Schedulable Apex? Explain the Scheduler interface and CRON expression.",
  placeholder: "Enter your answer..."
},
{
  id: 9,
  part: "Part 1 — Scenario Questions",
  type: "scenario",
  category: "Monitoring Async Apex",
  scenario: "A Batch Apex job failed during execution and the administrator wants to know its status and failure details.",
  question: "How can asynchronous Apex jobs be monitored in Salesforce? Which object stores the job information?",
  placeholder: "Enter your answer..."
},
{
  id: 10,
  part: "Part 1 — Scenario Questions",
  type: "scenario",
  category: "REST Callouts",
  scenario: "An Apex class must retrieve customer details from an external REST API.",
  question: "Explain how an Apex REST callout is performed using HttpRequest and HttpResponse. What steps are required?",
  placeholder: "Enter your answer..."
},
{
  id: 11,
  part: "Part 1 — Scenario Questions",
  type: "scenario",
  category: "Named Credentials",
  scenario: "The authentication token of an external API changes frequently, requiring code changes every time.",
  question: "How do Named Credentials simplify authentication? Why are they preferred over hardcoding credentials?",
  placeholder: "Enter your answer..."
},
{
  id: 12,
  part: "Part 1 — Scenario Questions",
  type: "scenario",
  category: "OAuth 2.0 & Connected App",
  scenario: "An external application needs secure access to Salesforce APIs.",
  question: "What is the purpose of a Connected App? Explain how OAuth 2.0 is used to authenticate external applications.",
  placeholder: "Enter your answer..."
},
{
  id: 13,
  part: "Part 1 — Scenario Questions",
  type: "scenario",
  category: "Apex Web Services",
  scenario: "Another system needs to create Account records in Salesforce using Apex.",
  question: "How can you expose an Apex class as a web service? Explain the required annotations.",
  placeholder: "Enter your answer..."
},
{
  id: 14,
  part: "Part 1 — Scenario Questions",
  type: "scenario",
  category: "SOQL Security",
  scenario: "A custom Apex class retrieves Salary__c values even though some users do not have field access.",
  question: "How does WITH SECURITY_ENFORCED solve this problem? What happens if the user does not have field access?",
  placeholder: "Enter your answer..."
},
{
  id: 15,
  part: "Part 1 — Scenario Questions",
  type: "scenario",
  category: "Security with DML",
  scenario: "An Apex class updates fields that the running user does not have permission to edit.",
  question: "How can Security.stripInaccessible() help before performing DML? Explain its purpose.",
  placeholder: "Enter your answer..."
},
{
  id: 16,
  part: "Part 1 — Scenario Questions",
  type: "scenario",
  category: "Sharing Keywords",
  scenario: "A utility class should always enforce record-level security regardless of who calls it.",
  question: "Compare with sharing, without sharing, and inherited sharing. Which keyword should be used in this scenario and why?",
  placeholder: "Enter your answer..."
},
{
  id: 17,
  part: "Part 1 — Scenario Questions",
  type: "scenario",
  category: "Data Import Wizard",
  scenario: "A business user wants to import 20,000 Account records without writing Apex code.",
  question: "Would you recommend Data Import Wizard or Data Loader? Explain your choice and its limitations.",
  placeholder: "Enter your answer..."
},
{
  id: 18,
  part: "Part 1 — Scenario Questions",
  type: "scenario",
  category: "Data Loader",
  scenario: "An administrator must update 500,000 Contact records using an External ID.",
  question: "Why is Data Loader the preferred tool? Explain how the update or upsert operation would be performed.",
  placeholder: "Enter your answer..."
},
{
  id: 19,
  part: "Part 1 — Scenario Questions",
  type: "scenario",
  category: "Bulk Upload",
  scenario: "After importing records with Data Loader, several records failed while others succeeded.",
  question: "Which files generated by Data Loader help identify successful and failed records? How would you resolve the failures?",
  placeholder: "Enter your answer..."
},
{
  id: 20,
  part: "Part 1 — Scenario Questions",
  type: "scenario",
  category: "Revision",
  scenario: "You are reviewing an Apex application that includes asynchronous processing, integrations, security, test classes, and data migration.",
  question: "List at least five best practices you would follow before deploying the application to production.",
  placeholder: "Enter your answer..."
},

  // ══════════════════════════════════════════════════════════════
  //  PART 2 — MCQ  (Q21 – Q40)
  // ══════════════════════════════════════════════════════════════

  {
  id: 21,
  part: "Part 2 — Multiple Choice Questions",
  type: "mcq",
  category: "Introduction to Test Classes",
  scenario: "A developer creates an Apex class and attempts to deploy it to production without writing a test class.",
  question: "Why does Salesforce require Apex test classes before deployment?",
  options: [
    "To improve UI performance",
    "To achieve the required code coverage and validate functionality",
    "To reduce governor limits",
    "To enable debug logs"
  ],
  answer: 1
},
{
  id: 22,
  part: "Part 2 — Multiple Choice Questions",
  type: "mcq",
  category: "Unit Testing",
  scenario: "A developer writes a test method that performs DML operations but never verifies the results.",
  question: "Which Apex method should be used to verify expected outcomes in a test class?",
  options: [
    "System.debug()",
    "System.assert()",
    "Database.insert()",
    "Test.startTest()"
  ],
  answer: 1
},
{
  id: 23,
  part: "Part 2 — Multiple Choice Questions",
  type: "mcq",
  category: "Test Classes for Apex Triggers",
  scenario: "A trigger creates a Task after an Account is inserted.",
  question: "What should a test class verify after inserting the Account?",
  options: [
    "That debug logs are generated",
    "That the Task record is created successfully",
    "That governor limits increase",
    "That the trigger is disabled"
  ],
  answer: 1
},
{
  id: 24,
  part: "Part 2 — Multiple Choice Questions",
  type: "mcq",
  category: "Test Data Factory",
  scenario: "Several test classes repeatedly create the same Account and Contact records.",
  question: "What is the primary purpose of a Test Data Factory class?",
  options: [
    "To execute asynchronous jobs",
    "To reuse common test data creation logic",
    "To deploy metadata",
    "To improve SOQL performance"
  ],
  answer: 1
},
{
  id: 25,
  part: "Part 2 — Multiple Choice Questions",
  type: "mcq",
  category: "Future Methods",
  scenario: "A trigger needs to perform a REST callout after inserting a record.",
  question: "Which annotation is required for an Apex Future Method performing a callout?",
  options: [
    "@future",
    "@future(callout=true)",
    "@AuraEnabled",
    "@InvocableMethod"
  ],
  answer: 1
},
{
  id: 26,
  part: "Part 2 — Multiple Choice Questions",
  type: "mcq",
  category: "Queueable Apex",
  scenario: "A developer needs to pass a List<Account> to an asynchronous job.",
  question: "Which asynchronous Apex feature supports passing complex objects?",
  options: [
    "Future Method",
    "Workflow Rule",
    "Queueable Apex",
    "Schedulable Apex"
  ],
  answer: 2
},
{
  id: 27,
  part: "Part 2 — Multiple Choice Questions",
  type: "mcq",
  category: "Batch Apex",
  scenario: "An organization must process 5 million Contact records.",
  question: "Which Apex feature is best suited for processing this large data volume?",
  options: [
    "Future Method",
    "Queueable Apex",
    "Batch Apex",
    "Anonymous Apex"
  ],
  answer: 2
},
{
  id: 28,
  part: "Part 2 — Multiple Choice Questions",
  type: "mcq",
  category: "Schedulable Apex",
  scenario: "A developer wants an Apex job to execute every night at 12:00 AM.",
  question: "Which interface must the Apex class implement?",
  options: [
    "Database.Batchable",
    "Schedulable",
    "Queueable",
    "Iterable"
  ],
  answer: 1
},
{
  id: 29,
  part: "Part 2 — Multiple Choice Questions",
  type: "mcq",
  category: "Monitoring Async Apex",
  scenario: "An administrator wants to check whether a Batch Apex job completed successfully.",
  question: "Which Salesforce object stores asynchronous job information?",
  options: [
    "CronTrigger",
    "AsyncApexJob",
    "ApexLog",
    "EventLogFile"
  ],
  answer: 1
},
{
  id: 30,
  part: "Part 2 — Multiple Choice Questions",
  type: "mcq",
  category: "REST Callouts",
  scenario: "An Apex class needs to consume data from an external REST API.",
  question: "Which Apex class is used to send the HTTP request?",
  options: [
    "HttpRequest",
    "WebServiceCallout",
    "JSONParser",
    "RestContext"
  ],
  answer: 0
},
{
  id: 31,
  part: "Part 2 — Multiple Choice Questions",
  type: "mcq",
  category: "Named Credentials",
  scenario: "A developer wants to avoid hardcoding usernames and passwords in Apex.",
  question: "Which Salesforce feature should be used?",
  options: [
    "Connected App",
    "Remote Site Settings",
    "Named Credentials",
    "Custom Labels"
  ],
  answer: 2
},
{
  id: 32,
  part: "Part 2 — Multiple Choice Questions",
  type: "mcq",
  category: "OAuth 2.0",
  scenario: "An external application needs secure access to Salesforce APIs.",
  question: "Which authentication protocol is primarily used?",
  options: [
    "SOAP",
    "OAuth 2.0",
    "FTP",
    "SAML Only"
  ],
  answer: 1
},
{
  id: 33,
  part: "Part 2 — Multiple Choice Questions",
  type: "mcq",
  category: "Connected App",
  scenario: "A mobile application needs to authenticate with Salesforce.",
  question: "Which Salesforce component is required?",
  options: [
    "Permission Set",
    "Connected App",
    "Validation Rule",
    "Workflow Rule"
  ],
  answer: 1
},
{
  id: 34,
  part: "Part 2 — Multiple Choice Questions",
  type: "mcq",
  category: "Apex Web Services",
  scenario: "A developer wants to expose an Apex method so external systems can invoke it.",
  question: "Which annotation is commonly used to expose a REST endpoint?",
  options: [
    "@RestResource",
    "@future",
    "@InvocableMethod",
    "@AuraEnabled"
  ],
  answer: 0
},
{
  id: 35,
  part: "Part 2 — Multiple Choice Questions",
  type: "mcq",
  category: "SOQL Security",
  scenario: "A query should fail if the running user does not have access to one of the selected fields.",
  question: "Which SOQL clause enforces field-level security automatically?",
  options: [
    "WITH USER_MODE",
    "WITH SECURITY_ENFORCED",
    "FOR UPDATE",
    "ALL ROWS"
  ],
  answer: 1
},
{
  id: 36,
  part: "Part 2 — Multiple Choice Questions",
  type: "mcq",
  category: "Security with DML",
  scenario: "Before updating records, inaccessible fields should be removed automatically.",
  question: "Which Apex method performs this task?",
  options: [
    "Security.stripInaccessible()",
    "Database.update()",
    "System.assert()",
    "Schema.describeSObjects()"
  ],
  answer: 0
},
{
  id: 37,
  part: "Part 2 — Multiple Choice Questions",
  type: "mcq",
  category: "Sharing Keywords",
  scenario: "A class must always respect the current user's record-level sharing rules.",
  question: "Which keyword should be used?",
  options: [
    "without sharing",
    "with sharing",
    "global sharing",
    "private sharing"
  ],
  answer: 1
},
{
  id: 38,
  part: "Part 2 — Multiple Choice Questions",
  type: "mcq",
  category: "Data Import Wizard",
  scenario: "A business user needs to import 20,000 Account records without using an API tool.",
  question: "Which Salesforce tool is the best choice?",
  options: [
    "Workbench",
    "Data Loader",
    "Data Import Wizard",
    "Developer Console"
  ],
  answer: 2
},
{
  id: 39,
  part: "Part 2 — Multiple Choice Questions",
  type: "mcq",
  category: "Data Loader",
  scenario: "An administrator must update 500,000 Contact records.",
  question: "Which tool is recommended for this requirement?",
  options: [
    "Data Import Wizard",
    "Data Loader",
    "Schema Builder",
    "Process Builder"
  ],
  answer: 1
},
{
  id: 40,
  part: "Part 2 — Multiple Choice Questions",
  type: "mcq",
  category: "Bulk Upload",
  scenario: "After performing a bulk upload, some records failed while others succeeded.",
  question: "Which Data Loader output file contains the failed records and error messages?",
  options: [
    "Success.csv",
    "Export.csv",
    "Error.csv",
    "Log.csv"
  ],
  answer: 2
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

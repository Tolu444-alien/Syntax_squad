# Product Requirement Document (PRD)
## Campus Lost-and-Found System (TrackIt)
**Version:** 1.0 (MVP)
**Date:** 26th November 2026
**Status:** Draft
**Group / Project Managers:** Syntax_squad - Tiamiyu Toluwalope - 25/0597, Uchegbu Nneka - 25/1443, Ositoye Oluwadojutimi - 25/1151, Mfonabasi Solomon - 25/0434

---

### 1. Document Overview
* **Product Name:** TrackIt (Campus Lost-and-Found System)
* **Objective:** Create a centralized digital platform for students to report, track, and recover lost or found personal belongings across campus instead of mostly relying on "hope".


### 2. Problem Statement & Real-Life Intel (Survey Data)
Based on primary research conducted with **20+ campus students**:
* **The Scale of Loss:** **100% of surveyed students** have lost a personal item on campus(including notebooks, wallets, umbrellas and airpods).
* **Low Recovery Rates:** **80% of students never recovered** their items, and 10% experienced long delays. Only **5%** found traditional recoverymethods effective.
* **Core Pain Points:**
  * Lack of a centralized reporting system (**50%**)
  * Not knowing where to report lost items(**45%**)
  * Difficulty tracking down the person who found the item (**20%**)
* **Current Inefficient Workflows:** Students currently rely on manual workarounds like asking around locations (**60%**), asking friends (**50%**), or posting across unorganised WhatsApp groups (**35%**)
* **High-Loss Locations:** Items are most frequently lost in Lecture Halls/Classrooms, Halls and Cafeteria.
* **User Demand:** **About 75% of students** confirmed they would definately use a centralized campus platform.

### 3. Goals & Success Metrics
* **Item Recovery Rate:** Increase successful item recovery from the baseline 10% to **≥ 50% within 72 hours**.
* **Reporting Speed:** Enable students to log a lost or found item in **under 60 seconds**.
* **Adoption:** Secure active usage across primary campus hotspots (lecture halls, halls, and cafeteria).

### 4. Target Audience & User Personas
* **Persona 1 - The Distressed Loser:** A student who misplaces essential study tools (notebooks, ID cards, phones) in crowded academic buildings and needs a fast, centralized way to alert the campus.
* **Persona 2 - The Honest Finder:** A student (part of the high percentage of people who find lost items belonging to others) who wants a friction-free way to log and drop off found items without hassle.

### 5. Core Features & Functional Requirements (MVP)
* **FR-1: Report Lost Item ('P0'):** Quick intake form capturing item category, detailed description, date, and specific campus location tag.
* **FR-2: Report Found Item & Photo Upload ('P0'):** Finder interface supporting photo uploads and drop-off location logging.
* **FR-3: Smart Match Notifications (P0):** Automated alerts notifying owners immediately when a newly posted "Found" item matches their lost criteria.
* **FR-4: Secure Owner-Finder Hand Assessing (P0):** In-app communication or verification check to ensure safe property return.

### 6. Non Functional Requirements
* **Usability:**
  * The platform should have a simple easy-to-understand interface
  * Users should be able to report an item without unnecesary steps.
* **Performance:**
  * The system should load pages and search results within a reasonable time.
  * The system should process report submissions without unnecessary delays.
* **Security:**
  * User passwords should be securely stored.
  * The system should protect users' personal information.

### 7. User's Story
* **FR-1: Students who lost an item:**
  * As a student who lost an item, I want to report it on the platform so that others can help me find it.
  * As a student, I want to describe my lost iems and where I last saw it so that people can identify it.
  * As a student, I want to search through found items so that i can check whether someone has recovered my belongings.
* **FR-2: Student who found an item:**
  * As a student who found an item, I want to report it on the platform so that its owner can find it.
  * As a student, I want to upload a picture of a found item so that its owner can recognize it.
  * As a student, I want to specify where I found an item so that its owner knows where to look for it.

### 8. Acceptance Criteria
* **Feature 1:User registration and Login**
  * A user can create an account using the required information
  * A user can log in using valid credentals
* **Feature 2:Reporting a lost item**
  * A user can submit a lost item report
  * The system displays a success message after submission
* **Feature 3: Administrator Management**
  * An administrator can view submitted reports and manage status of the reports
  * An administrator can remove inappropriate reports

### 9. Assumptions and Open Questions
* **Assumptions:**
  * Students and staff have access to smartphones or computers and the internet
  * Users are willing to report lost and found items when provided with an easy-to-use platform.
  * Users will provide accurate information when reporting items.
  * An administration or authorized staff member will be available to oversee the platform.

* **Open Questions:**
  1. Who will be responsible for managing the platform?
  2. Should users be required to register using their university email addresses?
  3. Where will found items be physically kept until their owners retrieve them?
  4. Should users be allowed to report items anonymously?

### 10. User Flow 
1. **Lost Flow:** '[Open App] → [Report Lost Item] → [Add Details & Location] → [Recieve Match Alert] → [Verify Ownership & Recover]'
2. **Found Flow:** '[Open App] → [Report Found Item] → [Upload Photo & Drop-off Spot] → [Connect with Verified Owner]'

### 11. Out of Scope & Future Roadmap
* **Out of Scope:** GPS tracker hardware integrations, cash reqard escrow systems, and off-campus city tracking.
* **Roadmap:** AI image recognition for automatic categorization from uploaded photos

### 12. Risks & Mitigations
* **Risk:** False ownership claims on high-value items (phones, gadgets).
* **Mitigation:** Require finders to withhold one unique identifying etail (e.g., phone lock screen wallpaper or contents inside a wallet) that the claimant must correctly verify before contact details are revealed.

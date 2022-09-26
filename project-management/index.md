---
label: Project Management
icon: briefcase
order: 1000
---

## Creating User Stories

User stories are **short, simple descriptions** of a feature or bug told from the perspective of the person who desires the new capability, usually a QA tester or client. The following is a typical workflow:

1. A client sends a change or bug request to the project manager.
2. The project manager reviews the request:
   1. Determines if it's valid (can reproduce, client has hours in budget, etc.)
   2. Gather's all details, designs, needed functionality
   3. If needed, speaks to the developer to see possibilities, get estimates, review requirements
   4. Gather's all needed details:
      a. Link to request
      b. Screenshot if possible (before/after, design vs. implementation)
      c. Use cases not considered like functionality & interaction states
   5. Parses the request in a short, descriptive user story:
      a. _As a type of [type of user], I want [some goal] so that [some reason]_
      b. _When a [type of user] does [action] on [location], it should [action], instead it [action]_
      c. Numbered list of related items such as minor QA issues or content updates

!!!
As a rule of thumb, a new developer that's unfamiliar with the project should have all details needed to complete the request without having to make assumptions.
!!!

### Assigning Stories

1. Once created, the project manager should determine:
   a. the sprint
   b. priority of the request
   c. link any related or blocking stories
2. **If incomplete**, awaiting details, or otherwise not ready to be worked on, assign to the **project manager**
3. **If complete**, assign to the appropriate **developer**

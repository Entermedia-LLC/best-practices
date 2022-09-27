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
   2. Gather's all details, designs, needed functionality, etc.
   3. If needed, speaks to the developer to find possibilities, get estimates, review requirements
   4. Gather's all needed details:
      a. **URL** of the request
      b. **Screenshot** if possible (before/after, design vs. implementation)
      c. **Use cases not considered** like functionality & interaction states
   5. Parses the request in a short, descriptive user story:
      a. _As a type of [type of user], I want [some goal] so that [some reason]_
      b. _When a [type of user] does [action] on [location], it should [action], instead it [action]_
      c. **Numbered list of related items** such as minor QA issues or content updates
      d. **Avoid non-specific requests** such as, _it looks weird_, _add more space_, _should be bigger_, etc.
      e. Include **layered designs** and/or detailed specs such as, font sizes, aspect ratios, etc.

!!!
**Rule of thumb:** a new developer that's unfamiliar with the project should have all details needed to complete the request without having to make assumptions or searching to find what's described.
!!!

### Assigning Stories

1. Once created, the project manager should determine:
   a. the sprint
   b. priority of the request
   c. link any related or blocking stories
2. **If incomplete**, awaiting details, or otherwise not ready to be worked on, assign to the **project manager**
3. **If complete**, ready to be worked on, assign to the appropriate **developer**

### Story Workflow & QA

1. Each morning developers should review the assigned stories in the **To Do** column & make note of any questions/concerns to go over during scrum.
2. Once a developer begins to work on a story, they should move it to the **In Progress** column in Jira.
3. After completion, the developer should comment on the story with a link/location of the change, then move to the **QA / Approval** column.
4. The project manager should then review the update, & determine if all is good or needs additional work.
5. If needs additional work, comment with those details and move back to the **To Do** column.
6. If approved, move to the **Approved / Ready for Live** column.

### Deploying Stories

Once a batch of stories has been moved to the **Approved / Ready for Live** column & it's time to deploy those changes:

1. The project manager creates a deploy story, links all approved stories to it & assigns accordingly.
2. Once the deployment has been completed, the developer should comment on the deploy story then move to the **QA / Approval** column.
3. The project manager should then test the deployed changes & if all looks good moves the deploy & all linked stories to the **Done** column.

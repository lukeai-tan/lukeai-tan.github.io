# MHW Crown Checklist
#### Video Demo: https://youtu.be/EeqIFj-xa3M

#### Overview:
I created the Monster Hunter World Crown Checklist to help players easily track their progress in obtaining crowns for monsters in the game. Tracking crowns within the game itself can be cumbersome, so I developed this external checklist to provide a more convenient way to monitor your progress. During my search, I found no interactive checklists available—only static spreadsheets or simple lists that required manual updates. To solve this, I built an interactive checklist website where users can check and save their crown progress.

# Features
## index.html
The website offers two distinct checklists: one for base game monsters and one for Iceborne monsters. I separated these two to avoid creating an overwhelming list and to ensure that players without the Iceborne DLC can focus solely on the base game. To keep the layout clean, I implemented collapsible tables for both the base game and Iceborne checklists, allowing users to hide sections they don’t need. Each monster's name, type (Base or Iceborne), and crown categories (giant and miniature) are displayed, with checkboxes for tracking your progress.

## Checkboxes
Under each monster, you’ll find checkboxes for the Giant and Miniature crowns. You can check the boxes based on the crowns you've obtained in-game. The checklist remembers your selections via local storage, meaning your progress is saved even after refreshing the page or closing the browser. This ensures that users don’t have to manually re-check their progress, making it easier to pick up where they left off.
monsters.json
Instead of embedding all monster data directly into the HTML, I store it in a separate "monsters.json" file. This approach makes the code more organized and easier to manage. The JSON file contains all monsters from both the base game and Iceborne, and their type (Base Game or Iceborne) is used to automatically allocate them to the appropriate table. This allows for easy updates to the checklist by simply modifying the JSON file without having to edit the HTML itself.

## script.js

### Error Handling:
I’ve added an error message that will display if the monster data fails to load. This can happen if there are issues with accessing the JSON file, particularly when running the website on a local server in Google Chrome. The error message helps users troubleshoot by indicating that the problem lies with loading the monster data.

### Unique Checkbox IDs:
Initially, I had an issue where all checkboxes in each column were treated as the same, causing them to interact with one another. By incorporating unique IDs for each checkbox based on the monster’s ID, I fixed this problem, ensuring that each checkbox operates independently. Now, users can check or uncheck the boxes for each monster without interference from others.

### Automatic Sorting:
The script dynamically distributes monsters into their respective tables based on their type (Base Game or Iceborne), using the type field from the JSON file. This allows me to easily add new monsters to the checklist by simply updating the JSON data without needing to modify the HTML structure.

### Local Storage for Progress Tracking:
I implemented event listeners for the checkboxes to detect changes when they are checked or unchecked. Whenever a change occurs, the updated state is saved to the browser's local storage. This means that your crown progress is saved on your device, and you can freely return to the checklist at any time to view or update your progress. This feature is essential for long-term tasks like obtaining crowns in Monster Hunter World, where the process can take a significant amount of time.

#### Conclusion
With this interactive checklist, keeping track of your progress in obtaining monster crowns in Monster Hunter World is now easier and more efficient. The checklist is designed to save your progress, allowing you to check it at your convenience without worrying about losing your data. Whether you're focusing on the base game or Iceborne, this tool is a great companion for anyone striving to complete their crown collection.

# MHW Crown Checklist
#### Video Demo:  https://youtu.be/EeqIFj-xa3M
#### Description:
I created a monster hunter world crown checklist to make it easier to keep track of crowns obtained in the game. Usually, checking for the progress in game is a big hassle, and it is much easier to be able to refer to something externally. I searched the internet for any monster hunter world crown checklists, but none had an interactive checklist. They were all either spreadsheet lists where you had to make DIY checks on your own with an arts tool, or just a standard list to eyeball. No list gave me the ability to manually check and save my progress. Thus, I created this checklist website to create a solution to resolve this issue. 

## index.html
The website has 2 checklists, one for the base game monsters and iceborne monsters. I separated the two to make it neater, rather than a long list of monsters. Additionally, not everyone has the iceborne dlc so people who do not can easily ignore iceborne and focus on the base game. I added collapsible tables for base game and iceborne to allow users to hide which table they didn't need, making it neater and less cramped for reading. I added columns for the monsters' name, type (base or iceborne), giant and miniature crown.

Each checklist has checkboxes under giant and miniature crowns. You check the boxes according to what crowns you have, leave them unchecked if you don't. The check boxes will stay checked as their status is saved to local storage. I did this because the checklist website will eventually be closed, and it will waste the user's time to have to recheck the previously checked boxes. Saving the progress allows the user to freely leave and come back to update existing progress when he or she wishes. 

monsters.json
I made it such that the script calls a json file "monsters.json" which includes the monster ID, name and type, rather than pasting it in the index.html. It includes all the monsters from base game and iceborne. This improves readability of the index code and also allows me to isolate the json data and edit it accordingly if necessary. I used the monster type to allocate base game and iceborne monsters to their respective tables, instead of making two separate json files.

## script.js

### error message
I added an error message stating 'Something went wrong loading the monsters data, try reloading the page.' in the case calling monsters.json was not successful. I had a bit of an issue trying to call the json file when I was running the website on google chrome from VS code. Turns out Google Chrome has a function that blocks json files if you are running the website on a local server. I eventually found a workaround for this, but the error message was useful in telling me what the problem was when monsters data failed to show up on the respective tables.

### checkboxes
For the checkboxes, I used the monster ID to give each checkbox its own individual ID. Initially, I had not incorporated monster IDs in the code, which made all checkboxes in each column the same, resulting in checking box leading to checking of all boxes in the column. Adding monster IDs and in turn the checkbox IDs fixed this issue and allowed each checkbox to be checked on its own. As such, the user is able to check any box according to what crown he has obtained in the game without worrying about the checkboxes interferring with each other. 

### distributing the data
I created baseGameTableBody and iceborneTableBody to allow the script to sort the monsters in monsters.json to their respective tables in index.html, based on their type 'Base Game' or 'Iceborne'. This works hand in hand with index.html, and I can easily add more monsters to the monsters.json file and classify it with the type, without needing to organise the monsters.json file. The script will distribute it automatically.

### local storage
I added change event listeners to check if the checkboxes for giant or miniature crowns are checked or unchecked. If there is a change, local storage is updating with the new state : checked or unchecked. This allows the user to make changes that save, even after refreshing the page or closing and reopening the page. This is the core feature of the checklist, which is useful for a long term task such as obtaining crowns in the game, which usually takes a long time. This local storage is saved to your own device, so each individual user is able to have their own personal checklist to keep track of their data.

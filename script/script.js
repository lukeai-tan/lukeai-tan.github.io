$(document).ready(function() {
    // Function to fetch JSON data and populate tables
    function populateMonsterTables() {
        // URL to your JSON file
        $.getJSON("monsters.json").fail(function (jqXHR, textStatus, errorThrown) {
            console.log('getJSON monsters.json request failed! ' + textStatus);
            alert('Something went wrong loading the monsters data, try reloading the page.');
            }).done(function (data) {
            // Function to create a row for a monster
            function createMonsterRow(monster, tableBody) {
                var row = $('<tr>');
                row.append($('<td>').text(monster.Name));
                row.append($('<td>').text(monster.Type));

                // Giant Crown checkboxes
                var checkboxCellGiant = $('<td>');
                var checkboxGiant = $('<input type="checkbox" />');
                checkboxGiant.attr('id', 'chk_giant_' + monster.ID); // Example ID format
                checkboxCellGiant.append(checkboxGiant);
                row.append(checkboxCellGiant);

                // Miniature Crown checkboxes
                var checkboxCellMiniature = $('<td>');
                var checkboxMiniature = $('<input type="checkbox" />');
                checkboxMiniature.attr('id', 'chk_miniature_' + monster.ID); // Example ID format
                checkboxCellMiniature.append(checkboxMiniature);
                row.append(checkboxCellMiniature);

                row.append($('<td>')); // Placeholder for Remaining column

                tableBody.append(row);

                // Check local storage for saved checkbox status and set if exists
                var savedStatusGiant = localStorage.getItem('chk_giant_' + monster.ID);
                if (savedStatusGiant === 'true') {
                    checkboxGiant.prop('checked', true);
                }
                var savedStatusMiniature = localStorage.getItem('chk_miniature_' + monster.ID);
                if (savedStatusMiniature === 'true') {
                    checkboxMiniature.prop('checked', true);
                }

                // Add change event listeners to save checkbox status to local storage
                checkboxGiant.on('change', function() {
                    localStorage.setItem('chk_giant_' + monster.ID, checkboxGiant.prop('checked'));
                });
                checkboxMiniature.on('change', function() {
                    localStorage.setItem('chk_miniature_' + monster.ID, checkboxMiniature.prop('checked'));
                });
            }

            // Populate base game and Iceborne monsters table
            var baseGameTableBody = $('#base_game_table tbody');
            var iceborneTableBody = $('#iceborne_table tbody');

            $.each(data.Monsters, function(index, monster) {
                if (monster.Type === "Base Game") {
                    createMonsterRow(monster, baseGameTableBody);
                } else if (monster.Type === "Iceborne") {
                    createMonsterRow(monster, iceborneTableBody);
                }
            });
        });
    }

    // Call the function to populate tables
    populateMonsterTables();
});

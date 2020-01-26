let btnGenerate = $('#btnGenerate');
let tBody = $('#tBody');
btnGenerate.on('click', function() {
            tBody.html('');
            $.ajax({
                        url: 'https://swapi.co/api/films/',
                        success: function(data) {
                                for (let info of data.results) {
                                    tBody.append(`<tr><td>${info.title}</td><td>${info.director}</td><td>${info.producer}</td><td>${info.episode_id}</td><td>${info.url}</td><td>${info.characters.length}</td><td>${info.planets.length}</td><td>${info.starships.length}</td><td>${info.vehicles.length}</td><td>${info.species.length}</td><td id="id_${info.episode_id}">${printFullName(info.characters[0], info.episode_id)
                        // $.ajax({
                        //     url: `${info.characters[0]}`,
                        //     success: function(response) {
                        //         let idChar = $(`#id_${info.episode_id}`)
                        //         idChar.html(`${response.name}`)
                        //     }
                        // })
                        // Prv nacin
                    }</td></tr>`)
            }
        },
        error: function(error) {
            console.log('The request failed!');
            console.log(error.errorText);
        }

    })
    function printFullName(param1, param2){
        $.ajax({
            url: `${param1}`,
            success: function(response) {
                let idChar = $(`#id_${param2}`)
                idChar.html(`${response.name}`)
            }
        })
    }
    // Vtor nacin ne znaeme kako e po pravilno :D
})
let btnGen = $('#btnGen');
let tBody = $('#tBody');
let btnNext = $('#btnNext')
let btnPrevious = $('#btnPrevious')

ajaxCall = () => {
    $.ajax({
        url: 'https://swapi.co/api/planets/?page=1',
        success: function(data) {
            for (let planets of data.results) {
                printPlanets(planets.name, planets.population, planets.climate, planets.gravity)
            }
        }
    })
}

printPlanets = (param1, param2, param3, param4) => {
    tBody.append(`<tr>
    <td>${param1}</td>
    <td>${param2}</td>
    <td>${param3}</td>
    <td>${param4}</td>
    </tr>`)
}
btnGen.click(function() {
    tBody.html('')
    ajaxCall();
    btnNext.css('display', 'unset');
})

ajaxNextCall = () => {
    $.ajax({
        url: 'https://swapi.co/api/planets/?page=2',
        success: function(data) {
            for (let planets of data.results) {
                printPlanets(planets.name, planets.population, planets.climate, planets.gravity)
            }
        }
    })
}
btnNext.on('click', function() {
    tBody.html('');
    ajaxNextCall();
    btnNext.css('display', 'none');
    btnPrevious.css('display', 'unset')
})

btnPrevious.on('click', function() {
    tBody.html('');
    ajaxCall();
    btnPrevious.css('display', 'none')
    btnNext.css('display', 'unset')
})
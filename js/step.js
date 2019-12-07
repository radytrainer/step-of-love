// API Link
function getUrl() {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}
// jQuery start
$(document).ready(function() {
    requestApi();
});

// request api
function requestApi() {
    $.ajax({
        dataType: 'json',
        url: getUrl(),
        success: (data) => getRecipe(data),
        error: () => console.log("Cannot request data"),
    });
}
// get recipe 
function getRecipe(myData) {
    myData.recipes.forEach(item => {
       switch(item.id) {
            case 0:
                eachStep(item.instructions, "recipe-one-step");
                break;
            case 1:
                    eachStep(item.instructions, "recipe-two-step");
                break;

       }
    })
}
// get recipe step
function eachStep(step, elementId) {
    var listStep = "";
    var steps = step.split('<step>');
    for(let i = 1; i < steps.length; i++) {
        listStep += `
            <li class="list-group-item" id="list">
                <strong class="text-primary">Step: ${i}</strong><br>
                &nbsp;&nbsp;&nbsp;
                <span class="font-italic">${steps[i]}<span>
            </li>
        `;
    }
    $('#' + elementId).html(listStep);
}
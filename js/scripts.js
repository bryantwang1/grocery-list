function toTitleCase(str)
{
    return str.replace(/\b\w/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

$(function() {
  $("form").submit(function(event) {
    event.preventDefault()

    var itemList = ["item1", "item2", "item3", "item4", "item5", "item6"];
    var groceryList = [];
    var realGroceryList = [];

    itemList.forEach(function(grocery){
    groceryList.push($("#"+grocery).val());
    realGroceryList = groceryList.map(function(grocery){
      return toTitleCase(grocery);
      });
    realGroceryList.sort();
    });

    $("form").hide();
    $(".results").append("<ul></ul>");

    realGroceryList.forEach(function(realGrocery){
      $("ul").append("<li>"+realGrocery+"</li>");
    });

  });
});

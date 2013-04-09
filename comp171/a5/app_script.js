Ingredients = new Array();
Ingredients[0] = "20 oz Black beans";
Ingredients[1] = "20 oz Kidney beans";
Ingredients[2] = "12 oz Chickpeas";
Ingredients[3] = "20 oz Lentils";
Ingredients[4] = "1/2 lb Brown Rice";
Ingredients[5] = "1/2 lb Whole-wheat Spaghetti";
Ingredients[6] = "1/2 lb Fettucini";
Ingredients[7] = "1/4 lb Couscous";
Ingredients[8] = "1/2 lb Orzo";
Ingredients[9] = "1/4 lb Cornmeal";
Ingredients[10] = "2 Onions";
Ingredients[11] = "12 oz Canned tomatoes: Diced";
Ingredients[12] = "8 oz Salsa";
Ingredients[13] = "1/4 lb Green beans";
Ingredients[14] = "1/4 lb Mushrooms";
Ingredients[15] = "1/2 lb Eggplant";
Ingredients[16] = "1/2 lb Sausage";
Ingredients[17] = "1 lb Chicken breast";
Ingredients[18] = "3/4 lb Steak tips";
Ingredients[19] = "1/2 lb Zucchini";
Ingredients[20] = "1/2 lb Yellow Squash";
Ingredients[21] = "1/4 lb Brown Sugar";
Ingredients[22] = "1/4 lb Cinammon";
Ingredients[23] = "1/2 lb Orange Pepper";
Ingredients[24] = "1/4 lb Sugar";
Ingredients[25] = "4 oz Vanilla";
Ingredients[26] = "16 oz vegatble Oil";
Ingredients[27] = "1 Stick of Butter";
Ingredients[28] = "1 Clove of Garlic";
Ingredients[29] = "1/4 lb Parsley";
Ingredients[30] = "1/4 lb Tomato";
Ingredients[31] = "1/2 lb Vanilla Bean";
Ingredients[32] = "12 oz Chicken Broth";
Ingredients[33] = "1 Loaf of Bread";
Ingredients[34] = "1/4 lb Celery";
Ingredients[35] = "1/2 lb Cherry Tomato";
Ingredients[36] = "1 Dozen Eggs";
Ingredients[37] = "1/2 lb Red Onion";
Ingredients[38] = "1/4 lb Basil";
Ingredients[39] = "1/2 lb Cheddar Cheese";
Ingredients[40] = "4 Chilli Pepper";

Instructions = new Array();
Instructions["Chicken Burritos"] = "--- Directions ---\n1. Preheat oven to 350 degrees\n2. Sautee chicken on stove with\nvegetable oil\n3. Sautee mushrooms and zuchini on\nstove with vegetable oil\n4. Sautee black beans on stove\n5. Mix chicken, mushrooms, zuchini,\nsalsa, and black beans in a bowl\n6. Wrap mixed ingredients in\n7. Sprinkle cheese on top of the\ntortillas\n8. Cook in oven for 25 minutes\n9. Let sit for 5 minutes to cool";
Instructions["poop"] = "hey";

window_stack = new Array();
window_stack.push("index.html");
Instruction_Page = '<div><textarea readonly="true" id="instructions"></textarea></div>'

function openWindow(file)
{
  window_stack.push(file);
  window.open(file, '_self', 'width=xxx,height=xxx,scrollbars=yes');
}

function generate()
{
  str = "";
  for(i = 0; i < 18; i++)
  {  
    str += Ingredients[Math.floor(Math.random()*41)] + "\n";
  }
  var txtArea = document.getElementById('groceries');
  txtArea.value = str;
}

function instructions(file)
{
  var index = document.getElementById("recipes").selectedIndex;
  var recipes = document.getElementById("recipes").options;
  str = recipes[index].text;
  $("#body_content").html(Instruction_Page);
  $("#body_content").trigger("create");
  $("#back_link").attr("href", "javascript:location.reload();");
  $("#back_link").removeAttr("data-rel");
  setTextArea(str, file);
}

function setTextArea(str, file)
{
  var txtArea = document.getElementById('instructions');
  txtArea.value = Instructions[str];
}

function back()
{
  for(var i in window_stack)
  {
     console.log(window_stack[i]);
  }
  window_stack.pop();
  file = window_stack.pop();
  console.log(file);
  window.open(file, '_self', 'width=xxx,height=xxx,scrollbars=yes');
}  
  
function openSaved(file)
{ 
  var Index = document.getElementById("savedSelection").selectedIndex;
  window.open(file, '_self', 'width=xxx,height=xxx,scrollbars=yes');
} 

function saveList()
{
  alert("List Saved");
  history.go(-1);
  return true;
}

function savePreferences()
{
  alert("Preferences Saved");
  history.go(-1);
  return true;
}

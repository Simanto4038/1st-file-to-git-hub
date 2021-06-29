
document.write(
    "a.ADDITION",<br/>,
    "b.SUBSTRUCT",
    "c.DIVISION",
    "d.MULTIPICATION"

);

   
num1 = prompt("enter number 1 :");
num2 = prompt("enter number 2 :");
choice = prompt();

num1 = parseInt(num1);
num2 = parseInt(num2);


switch (choice){
    case ("a"):
        document.write(num1+num2)
    break;
case ("b"):
    document.write(num1-num2)
    break;
case ("c"):
    document.write(num1/num2)
    break;
case ("d"):
    document.write(num1*num2)
    break;
default:
    document.write("This is a simple calculator choose a,b,c,d")}

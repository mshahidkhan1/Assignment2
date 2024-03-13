let usersBase=[];

console.log(usersBase.length)

for (let i = 0; i < usersBase.length; i++)
{
    if (usersBase.length === 0)
    {
        console.log("The list is empty!");
        break;
    }
    if (usersBase[i] === "admin")
    {
        console.log("Hello admin, would you like to see a status report?");
    }
    else
    {
        console.log(`Hi! ${usersBase[i]}, thank you for logging in again.`);
    }
}
let usersBase=["user1","user2","user3","user4","admin"];

for (let i = 0; i < usersBase.length; i++)
{
    if (usersBase[i] === "admin")
    {
        console.log("Hello admin, would you like to see a status report?");
    }
    else
    {
        console.log(`Hi! ${usersBase[i]}, thank you for logging in again.`);
    }
}
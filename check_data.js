import UserInfo from './src/Data/user_info.js';

console.log("UserInfo loaded successfully");
console.log("Name:", UserInfo.name);
console.log("Social:", UserInfo.social);

try {
    const firstName = UserInfo.name.split(" ")[0];
    console.log("First Name:", firstName);
} catch (e) {
    console.error("Error splitting name:", e);
}

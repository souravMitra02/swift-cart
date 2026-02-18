 1. What is the difference between null and undefined?

Ans: ndefined: ভেরিয়েবল ডিক্লেয়ার করা হয়েছে কিন্তু কোনো ভ্যালু দেওয়া হয়নি। এটা জাভাস্ক্রিপ্ট নিজে থেকে দেয়।
null: যখন আমরা ইচ্ছাকৃতভাবে কোনো ভেরিয়েবলকে "খালি" বোঝাতে চাই, তখন null ব্যবহার করি।

2. What is the use of the map() function in JavaScript? How is it different from forEach()? 

Ans: map(): লুপ চালিয়ে একটি নতুন অ্যারে রিটার্ন করে।
forEach(): শুধু লুপ চালায়, কোনো কিছু রিটার্ন করে না।


3. What is the difference between == and ===?

Ans: ==: শুধু মান (value) চেক করে। যেমন: 5 == "5" (True)।
===: মান এবং ডেটা টাইপ—দুটোই চেক করে। যেমন: 5 === "5" (False)।

4. What is the significance of async/await in fetching API data?

Ans: API থেকে ডেটা আনতে সময় লাগে। async/await ব্যবহার করলে কোড সহজ হয় এবং ডেটা না আসা পর্যন্ত অপেক্ষা করে, ফলে এরর কম হয় এবং কোড পড়তে সুবিধা হয়।

5. Explain the concept of Scope in JavaScript (Global, Function, Block) ?

Global Scope: কোডের যেকোনো জায়গা থেকে এক্সেস করা যায়।
Function Scope: শুধু ওই ফাংশনের ভেতর থেকে এক্সেস করা যায়।
Block Scope: শুধু নির্দিষ্ট ব্র্যাকেটের { } (যেমন: if বা for লুপ) ভেতর থেকে এক্সেস করা যায়।
const fetch = require('node-fetch');

async function testRegister() {
    try {
        console.log('Attempting to register test user...');
        const response = await fetch('http://localhost:3001/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: 'test_admin_debug_' + Date.now(),
                password: 'password123'
            })
        });

        const status = response.status;
        console.log(`Response Status: ${status}`);

        const text = await response.text();
        console.log(`Response Body: ${text}`);

        if (status === 404) {
            console.error("❌ ERROR: 404 Not Found. The auth routes are not loaded. RESTART YOUR BACKEND SERVER.");
        } else if (status === 500) {
            console.error("❌ ERROR: 500 Server Error. Likely the 'users' table is missing. RUN THE SCHEMA SQL.");
        } else if (status === 201) {
            console.log("✅ SUCCESS: Registration works!");
        } else if (status === 400) {
            console.log("⚠️ 400 Bad Request: " + text);
        }
    } catch (error) {
        console.error("❌ NETWORK ERROR: Could not connect to backend.", error.message);
        console.error("Make sure the backend is running on port 3001.");
    }
}

testRegister();

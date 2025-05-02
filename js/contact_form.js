document.getElementById("contact_form").addEventListener("submit", async function (event) {
    // async is required for await later
    event.preventDefault();
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const type = document.querySelector("input[name=\"type\"]:checked").value
    const unformatedMessage = document.getElementById("message").value
    var message = unformatedMessage.replace(/\n/g, '%0D%0A');
    // /.../ is Regex, \n is newline in HTML, g is globally, will be replaced with: %0D%0A in Unicode

    // append data to supabase
    const supabaseUrl = 'https://wwjcwudlcholwnievouh.supabase.co'; // Replace with your Supabase URL
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3amN3dWRsY2hvbHduaWV2b3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxNjYwMzYsImV4cCI6MjA2MTc0MjAzNn0.v7HeHsELg91joCn_3oI-8Z7_qAud5CdXryNnmuJkViY';
    const supabase_var = supabase.createClient(supabaseUrl, supabaseKey);

    const row = {
        name: name,
        email: email,
        type: type,
        msg: message
    }

    // add row to supabase
    const { data, error } = await supabase_var
        .from('contact') // Replace with your table name
        .insert([row]);
    
        if (error) {
            alert("Sorry, there's a technical problem. (Error: " + error + ")")
        } else {
            alert("Thank you, your message has been submitted")
        }
})
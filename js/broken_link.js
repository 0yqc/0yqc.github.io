document.getElementById("broken_link").addEventListener("submit", async function (event) {
    // async is required for await later
    event.preventDefault();
    const notes = document.getElementById("notes").value.replace(/\n/g, '%0D%0A');
    // /.../ is Regex, \n is newline in HTML, g is globally, will be replaced with: %0D%0A in Unicode
    const seen = document.getElementById("seen").value

    const referrer = navigator.referrer
    const url = window.location.pathname

    // append data to supabase
    const supabaseUrl = 'https://wwjcwudlcholwnievouh.supabase.co'; // Replace with your Supabase URL
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3amN3dWRsY2hvbHduaWV2b3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxNjYwMzYsImV4cCI6MjA2MTc0MjAzNn0.v7HeHsELg91joCn_3oI-8Z7_qAud5CdXryNnmuJkViY';
    const supabase_var = supabase.createClient(supabaseUrl, supabaseKey);

    const row = {
        url: url,
        ref: referrer,
        user_ref: seen,
        user_notes: notes
    }

    // add row to supabase
    const { data, error } = await supabase_var
        .from('broken_links') // Replace with your table name
        .insert([row]);
    
        if (error) {
            alert("Sorry, there's a technical problem. (Error: " + error + ")")
        } else {
            alert("Thank you, I'll have a look.")
        }
})
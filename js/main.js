//Header while scroll...
{
    $(function () {

        $(document).scroll(function () {
        let $nav = $("nav");
        let $nav_li = $("nav li");
        let $right_li = $(".right-part li");
        let $nav_a = $("nav a");

        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $nav_li.toggleClass('scrolled_li', $(this).scrollTop() > $nav.height());
        $right_li.toggleClass('scrolled_li_right', $(this).scrollTop() > $nav.height());
        $nav_a.toggleClass('scrolled_a', $(this).scrollTop() > $nav.height());
        });
    });

    function showRegister() {
        document.getElementById("register_container").style.display = "block";
    }

    function closeRegister() {
        document.getElementById("register_container").style.display = "none";
    }
}

{
    // Password security
    pass = document.getElementById('password').oninput = function() {
        let pass = document.getElementById('password').value;
        
        if (pass.length <= 5) {
            document.getElementById('pass_percent').value = '0%';
            document.getElementById('pass_percent').style.background = 'linear-gradient(to right, #FD0100, #FE7200)';
            document.getElementById('pass_security').value = 'not Set';
            document.getElementById('pass_security').style.background = '#777777';
        }
        else if (pass.length <= 10) {
            document.getElementById('pass_percent').value = '70%';
            document.getElementById('pass_percent').style.background = 'yellow';
            document.getElementById('pass_security').value = 'Medium';
            document.getElementById('pass_security').style.background = 'yellow';
        }
        else {
            document.getElementById('pass_percent').value = '100%';
            document.getElementById('pass_percent').style.background = 'green';
            document.getElementById('pass_security').value = 'Strong';
            document.getElementById('pass_security').style.background = 'green';
        }
    };
}
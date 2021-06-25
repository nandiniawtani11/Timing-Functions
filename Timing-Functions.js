<html>
    <head>
        <title>Timing Functions</title>
        <script>
            var ID=0;
            var seconds=0;
            function printMsg()
            {
                //for timeout
                //document.getElementById("op").innerHTML="5second later";
                //to set interval
                document.getElementById("op").innerHTML= seconds+"second";
                seconds++
            }
            function Start()
            {
                ID=window.setInterval(printMsg,1000);
            }
            function Stop()
            {
                window.clearTimeout(ID);
            }

        </script>
        <body>
            <button onclick="Start()" id="button1">Start</button>
            <h2 id="op">Start</h2>
            <button onclick="Stop()" id="button2">Stop</button>
        </body>
    </head>
</html>

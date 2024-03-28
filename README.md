<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Math Practice Problems</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <h1>Math Practice Problems</h1>
    </header>
    <nav id="unitLinks">
        <ul>
            <!-- Unit links will be inserted here by JavaScript -->
        </ul>        
    </nav>
    <footer>
        <p>© 2024 Math Practice. All rights reserved.</p>
    </footer>
    <script src="js/script.js"></script>
    <script>
        window.onload = function() {
            var unitNames = [
                "Complex numbers",    
                "Polar and Euler form",
                "Complex roots",
                "Proof by induction",
            ];
    
            var navList = document.querySelector('#unitLinks ul');
            
            unitNames.forEach(function(name, index) {
                var listItem = document.createElement('li');
                var link = document.createElement('a');
                link.href = `unit_pages/unit${index+1}.html`;
                link.textContent = name;
                listItem.appendChild(link);
                navList.appendChild(listItem);
            });
        };
    </script>
</body>
</html>

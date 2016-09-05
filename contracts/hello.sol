    contract hello {
        string greeting;
        
        function setGreeting(string g) {
            greeting = g;
        }
        
        function getGreeting() constant returns (string g) {
            g = greeting;
        }
        
        function getNumber() constant returns (uint u) {
            return now;
        }
    }

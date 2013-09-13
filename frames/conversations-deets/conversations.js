var app = {
    init: function() {
        $.get('030913.txt', function(c) {
            console.log(c);
            
            var messages = c.split('\n'),
                m,
                output = '',
                i = 0;
            
            for(i; i < messages.length; i++) {
                m = messages[i];
                output += app.msg(m);
            }
            
            document.getElementById('conversation').innerHTML = output;
        })
    },
    
    regex: /(\w)(?:: ?)(.*)/,
    
    msg: function(m) {
        var a = m.match(app.regex);
        console.log(a);
        return '<article class=\"' + a[1] + '\">' + a[2] + '</article>';
    }
    
}
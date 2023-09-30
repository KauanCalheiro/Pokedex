var lastSelectedIsDarkMode = localStorage.getItem('theme');
var classesToChange = ['night', 'dark-mode'];

if ( lastSelectedIsDarkMode == 'true' )
{
    $( 'body, #toggle-div' ).addClass( classesToChange );
    $( 'label#toggle-label' ).trigger( 'click' );
}

$( 'label#toggle-label' ).on( 'change',  (e) => 
{
    e.preventDefault();
    
    if (e.target.checked) 
    {
        $( 'body, #toggle-div' ).addClass( classesToChange );
        localStorage.setItem('theme', true);
    } else 
    {            
        $( 'body, #toggle-div' ).removeClass( classesToChange );
        localStorage.setItem('theme', false);
    }
});

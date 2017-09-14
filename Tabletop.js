<script>
function init() {
 Tabletop.init( { key: ‘https://docs.google.com/spreadsheets/d/1RMBlGsHP2v8pOdmPgDcfk0XHXkLQThNAVgPC65xesek/pubhtml',
 callback: function(data, tabletop) { 
 console.log(data)
 },
 simpleSheet: true } )
}
window.addEventListener(‘DOMContentLoaded’, init)
</script>

$( document ).ready(function() {


    // Search bar
    $("#searchBar").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".index-list .data-row").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });



    // Click to copy
    document.getElementById("copyButton").addEventListener("click", function() {
        copyToClipboard(document.getElementById("copyTarget"));
    });

    $("#copyButton").mouseout(function() {
        $('#copyButtonLabel').text('Cliquer');
    });

    function copyToClipboard(elem) {

        var targetId = "_hiddenCopyText_";

        var target = document.createElement("textarea");
        target.style.position = "absolute";
        target.style.left = "-9999px";
        target.style.top = "0";
        target.id = targetId;
        document.body.appendChild(target);
        target.textContent = elem.textContent;
    
        // select the content
        var currentFocus = document.activeElement;
        target.focus();
        target.setSelectionRange(0, target.value.length);
      
        // copy the selection
        var succeed;
        try {
            succeed = document.execCommand("copy");
        } catch(e) {
            succeed = false;
        }

        // restore original focus
        if (currentFocus && typeof currentFocus.focus === "function") {
            currentFocus.focus();
        }
      
        // clear temporary content
        target.textContent = "";

        $('#copyButtonLabel').text('Copie reussie');

        return succeed;
    }
});
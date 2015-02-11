<?php
if (isset($_GET['mail'])) {
    file_put_contents('liste.txt', $_GET['mail'], FILE_APPEND+LOCK_EX);
}

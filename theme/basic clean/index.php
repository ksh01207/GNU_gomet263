<?php
if (!defined('_INDEX_')) define('_INDEX_', true);
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (G5_IS_MOBILE) {
    include_once(G5_THEME_MOBILE_PATH.'/index.php');
    return;
}

include_once(G5_THEME_PATH.'/head.php');
?>

<h2 class="sound_only">최신글</h2>


<div class="latest_top_wr">

    <?php
    echo latest('all_latest_swiper', 'mainBanner', 4, 23);
    ?>

</div>
<div class="container indexSection">

    <?php
    echo latest('all_latest_swiper','notice',3,23);
     ?>

</div>
<script src="/ncs/js/index.js"></script>
<?php
include_once(G5_THEME_PATH.'/tail.php');

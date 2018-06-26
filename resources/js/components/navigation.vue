<template>

    <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-light; top: 200">


    <nav class="uk-navbar-container uk-margin" uk-navbar id="navbar">
        <div class="uk-navbar-center">

                <div class="uk-navbar-center-left">
                    <div>
                    <ul class="uk-navbar-nav">
                        <li>
                            <a href="#personalia" class="navheader">Personalia</a>
                        </li>
                    </ul>
                </div>
            </div>

            <a class="uk-navbar-item uk-logo" href="#" id="logo">DP</a>
            <!--<a class="uk-logo" src="">Logo</a>-->

            <div class="uk-navbar-center-right">
                <div>
                    <ul class="uk-navbar-nav">
                        <li><a href="#project" class="navheader">Project</a></li>
                    </ul>
                </div>
            </div>
        </div>
     </nav>
    </div>
</template>

<script>
    export default {
        name: "navigation"
    }
</script>

<style scoped>

</style>
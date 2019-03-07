<template>
    <div class="container">
           <nav class="navbar navbar-expand-lg navbar-light bg-transparent text-white">
        <a class="navbar-brand" href="/"><img class="img-fluid" :src="('img/logo.png')" width=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item active text-white">
                <a class="nav-link text-white" href="/">Home</a>
            </li>
            <li class="nav-item ">
                <a class="nav-link text-white" href="/about">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="/work">How we work</a>
            </li>
            <li class="nav-item">            
                <a class="nav-link text-white" href="/faq">FAQs</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="/blog">Blog</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="/auth.login">Sign in</a>
            </li>
            <li class="nav-item">
                <a class="nav-link btn btn-primary text-white signup-btn" href="/auth.register">Sign up</a>
            </li>
            </ul>           
        </div>
    </nav>
        </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

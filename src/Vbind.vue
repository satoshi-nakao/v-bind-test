<template>
<a v-bind:href="url">Netlify</a>
</template>

<script>
export default {
    data(){
       return{
           url: 'https://www.netlify.com/'
       }
    }
}
</script>
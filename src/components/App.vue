<template>
    <div id="app">
        <h1>{{count}}</h1>
        <button v-on:click="increment">+</button>
        <button v-on:click="decrement">-</button>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'
    export default {
        computed : mapState([
            'count'
        ]),
        methods: {
            ...mapActions([
                'increment',
                'decrement'
            ])
        }
    }
</script>

<style lang="scss">
    $color : black;
    h1{
        color: $color;
        background-color: lightyellow;
    }
</style>
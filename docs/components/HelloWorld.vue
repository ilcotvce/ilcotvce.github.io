<script lang="ts" setup>
import { data as list } from '../data/list.data';
</script>
<template>
    <h1>Hello World🚩</h1>
    <ul>
        <li v-for="item in list">
            {{ item.name }}
        </li>
    </ul>
</template>
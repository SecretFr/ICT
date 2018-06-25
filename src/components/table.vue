<template>
  <div>
    <h1>Plan Table</h1>
    <md-button class="md-accent">저장하기</md-button>
    <md-button class="md-primary">불러오기</md-button>

    <md-dialog :md-active.sync="showDialog">
      <md-content class="md-scrollbar">
      <md-dialog-title>Sheets</md-dialog-title>
      <md-field>
        <label>번호</label>
        <md-input v-model="number" type="number"></md-input>
      </md-field>
      <md-field>
        <label>시작시간</label>
        <md-input v-model="showing" type="number"></md-input>
      </md-field>
      <md-field>
        <label>주기</label>
        <md-input v-model="exe" type="number"></md-input>
      </md-field>
      <md-field>
        <label>연동</label>
        <md-input v-model="linkage" type="number"></md-input>
      </md-field>
      <md-field>
        <label>현시1</label>
        <md-input v-model="t1" type="number"></md-input>
      </md-field>
      <md-field>
        <label>현시2</label>
        <md-input v-model="t2" type="number"></md-input>
      </md-field>
      <md-field>
      <label>현시3</label>
      <md-input v-model="t3" type="number"></md-input>
      </md-field>
     <md-field>
      <label>현시4</label>
      <md-input v-model="t4" type="number"></md-input>
      </md-field>
      <md-field>
      <label>현시5</label>
      <md-input v-model="t5" type="number"></md-input>
      </md-field>
      <md-field>
      <label>현시6</label>
      <md-input v-model="t6" type="number"></md-input>
      </md-field>
      <md-field>
      <label>현시7</label>
      <md-input v-model="t7" type="number"></md-input>
      </md-field>
      <md-field>
      <label>현시8</label>
      <md-input v-model="t8" type="number"></md-input>
      </md-field>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
        <md-button class="md-primary" @click="showDialog = false">Save</md-button>
      </md-dialog-actions>
      </md-content>
    </md-dialog>

    <md-button class="md-accent" @click="showDialog = true">작성하기</md-button>
    <md-table>
      <md-table-row>
        <md-table-head md-numeric>번호</md-table-head>
        <md-table-head>시작시간</md-table-head>
        <md-table-head>주기</md-table-head>
        <md-table-head>연동</md-table-head>
        <md-table-head>현시1</md-table-head>
        <md-table-head>현시2</md-table-head>
        <md-table-head>현시3</md-table-head>
        <md-table-head>현시4</md-table-head>
        <md-table-head>현시5</md-table-head>
        <md-table-head>현시6</md-table-head>
        <md-table-head>현시7</md-table-head>
        <md-table-head>현시8</md-table-head>
      </md-table-row>

      <md-table-row>

      </md-table-row>

    </md-table>
  </div>
</template>

<script>
  export default {
    name: "table",
    data: () => ({
      showDialog: false
    })
  }
</script>

<style lang="scss" scoped>
  .md-content {
    overflow-y: auto;
  }
</style>

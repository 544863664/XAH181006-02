<template>
    <div class="center">
      <Layout>
        <Content>
          <router-view />
        </Content>
        <Footer>
          <Row>
            <Col>Copyright © 2014-2016 Almsaeed Studio. All rights reserved.</Col>
            <Col></Col>
          </Row>
        </Footer>
      </Layout>
    </div>
</template>

<script>
    export default {
        name: "Center_",
        data(){
            return{

            }
        },
    }
</script>

<style scoped>

</style>

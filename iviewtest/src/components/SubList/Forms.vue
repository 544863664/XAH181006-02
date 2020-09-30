<template>
    <div class="forms" style="padding: 0 16px;">
        <Row style="padding: 10px 0;">
          <Col span="12">
            <h1 style="display: inline;">General Form Elements</h1> Preview
          </Col>
          <Col span="10" style="height: 42px;line-height: 42px; float: right;text-align: right;padding-right: 10px">
            <Icon type="md-color-palette" />
            <a href="">Home</a>
            >
            <a href="">Tables</a>
            >
            <a href="">General Elements</a>
          </Col>
        </Row>
        <Row type="flex">
          <Col span="12">
            <Row class="div-model" style="border-top-color: #3c8dbc;">
              <Col span="" class="box-header">
                Quick Example
              </Col>
              <Col span="">
                <h3>Email address</h3>
                <Input type="text" placeholder="Enter email" />
              </Col>
              <Col span="">
                <h3>Password</h3>
                <Input type="password" placeholder="Password" />
              </Col>
              <Col span="">
                <h3>File input</h3>
                <Upload
                  multiple
                  action="//jsonplaceholder.typicode.com/posts/">
                  <Button icon="ios-cloud-upload-outline">Upload files</Button>
                </Upload>
                Example block-level help text here.
              </Col>
              <Col span="">
                <Checkbox>Check me out</Checkbox>
              </Col>
              <Col span="" class="box-footer">
                <Button type="primary">Submit</Button>
              </Col>
            </Row>
            <br>
            <Row class="div-model" style="border-top-color: #00a65a;">
              <Col span="" class="box-header">
                Different Height
              </Col>
              <Col span="">
                <Input size="large" placeholder=".input-lg" />
              </Col>
              <Col span="">
                <Input placeholder="Default input"/>
              </Col>
              <Col span="">
                <Input size="small" placeholder=".input-sm"/>
              </Col>
            </Row>
            <br>
            <Row class="div-model" style="border-top-color: #dd4b39;" type="flex" justify="space-between">
              <Col span="24" class="box-header">
                Different Width
              </Col>
              <br>
              <Col span="5">
                <Input placeholder=".col-xs-3" />
              </Col>
              <Col span="7">
                <Input placeholder=".col-xs-4" />
              </Col>
              <Col span="9">
                <Input placeholder=".col-xs-5" />
              </Col>
            </Row>
            <br>
            <Row class="div-model" style="border-top-color: #00c0ef;" type="flex" justify="space-between">
              <Col span="24" class="box-header">
                Input Addon
              </Col>
              <Col span="24">
                <Input placeholder="Username" prefix>
                  <span slot="prepend">@</span>
                </Input>
              </Col>
              <Col span="24">
                <Input suffix>
                  <span slot="append">.00</span>
                </Input>
              </Col>
              <Col span="24">
                <Input prefix suffix>
                  <span slot="prepend">$</span>
                  <span slot="append">.00</span>
                </Input>
              </Col>
              <Col span="24" style="margin-bottom: 0;">
                <h4>With icons</h4>
              </Col>
              <Col span="24">
                <Input placeholder="Email" prefix>
                  <span slot="prepend">
                    <Icon type="ios-mail" class="input-icons" />
                  </span>
                </Input>
              </Col>
              <Col span="24">
                <Input suffix>
                  <span slot="append">
                    <Icon type="md-checkmark" class="input-icons" />
                  </span>
                </Input>
              </Col>
              <Col span="24">
                <Input prefix suffix>
                  <span slot="prepend">
                    <Icon type="logo-usd" class="input-icons" />
                  </span>
                  <span slot="append">
                    <Icon type="md-bus" class="input-icons" />
                  </span>
                </Input>
              </Col>
              <Col span="24" style="margin-bottom: 0;">
                <h4>With checkbox and radio inputs</h4>
              </Col>
              <Col span="11">
                <Input prefix>
                  <span slot="prepend">
                    <Checkbox></Checkbox>
                  </span>
                </Input>
              </Col>
              <Col span="11">
                <Input prefix>
                  <span slot="prepend">
                    <Radio></Radio>
                  </span>
                </Input>
              </Col>
              <Col span="24" style="margin-bottom: 0;">
                <h4>With buttons</h4>
              </Col>
              <Col span="24">
                Large:
                <code>.input-group.input-group-lg</code>
              </Col>
              <Col span="24" style="height: 34px;">
                <Input prefix size="large">
                  <span slot="prepend" style="background: red">
                    <Select
                      style="
                        width:110px;
                        color: #fff;
                        padding: 0 7px;
                        background-color: #f39c12;
                        border-color: #e08e0b;"
                      value="Action">
                      <Option value="Action" label="Action">
                        <span>Action</span>
                      </Option>
                      <Option value="Another action" label="Another action">
                        <span>Another action</span>
                      </Option>
                      <Option value="Something else here" label="Something else here">
                        <span>Something else here</span>
                      </Option>
                      <Option value="Separated link" label="Separated link" style="border-top: 1px solid #eee;">
                        <span>Separated link</span>
                      </Option>
                    </Select>
                  </span>
                </Input>
              </Col>
              <Col span="24">
                Normal
                <!--<code></code>-->
              </Col>
              <Col span="24">
                <Input prefix>
                  <span slot="prepend">Action</span>
                </Input>
              </Col>
              <Col span="24">
                Small
                <code>.input-group.input-group-sm</code>
              </Col>
              <Col span="24">
                <Input sufix>
                  <span slot="append">
                    <Button>Go!</Button>
                  </span>
                </Input>
              </Col>
            </Row>
          </Col>
          <Col span="11" offset="1">
            <Row class="div-model" style="border-top-color: #00c0ef;">
              <Col span="24" class="box-header">
                Horizontal Form
              </Col>
              <Col span="4" class="login-title" style="">
                <h3>Email</h3>
              </Col>
              <Col span="20">
                <Input type="text" placeholder="Email" />
              </Col>
              <Col span="4" class="login-title"  style="">
                <h3>Password</h3>
              </Col>
              <Col span="20">
                <Input type="password" placeholder="Password" />
              </Col>
              <Col span="4"></Col>
              <Col span="20">
                <Checkbox>Remember me</Checkbox>
              </Col>
              <Col span="24" class="box-footer">
                <Button style="background: #eee;">Cancel</Button>
                <Button type="info" style="float: right">Sign in</Button>
              </Col>
            </Row>
            <br>
            <Row class="div-model" style="border-top-color: #f39c12;">
              <Col span="24" class="box-header">
                General Elements
              </Col>
              <Col span="24">
                <h3>Text</h3>
                <Input type="text" placeholder="Enter ..." />
              </Col>
              <Col span="24">
                <h3>Text Disabled</h3>
                <Input type="text" placeholder="Enter ..." disabled />
              </Col>
              <Col span="24">
                <h3>Textarea</h3>
                <Input type="textarea" placeholder="Enter ..." />
              </Col>
              <Col span="24">
                <h3>Textarea Disabled</h3>
                <Input type="textarea" placeholder="Enter ..." disabled />
              </Col>
              <Col span="24" style="color: #00a65a;">
                <h3><Icon type="md-checkmark" style="font-weight: bolder" /> Input with success</h3>
                <Input type="text" placeholder="Enter ..." class="success" />
                Help block with success
              </Col>
              <Col span="24" style="color: #f39c12;">
                <h3><Icon type="md-notifications-outline" style="font-weight: bolder" /> Input with warning</h3>
                <Input type="text" placeholder="Enter ..." class="warning" />
                Help block with warning
              </Col>
              <Col span="24" style="color: #dd4b39;">
                <h3><Icon type="ios-close-circle-outline" style="font-weight: bolder" /> Input with error</h3>
                <Input type="text" placeholder="Enter ..." class="error" />
                Help block with error
              </Col>
              <Col span="24">
                <CheckboxGroup>
                  <Checkbox>Checkbox 1</Checkbox>
                  <br>
                  <Checkbox style="margin: 10px 0;">Checkbox 2</Checkbox>
                  <br>
                  <Checkbox disabled>Checkbox disabled</Checkbox>
                </CheckboxGroup>
              </Col>
              <Col span="24">
                <RadioGroup vertical>
                  <Radio label="0">Option one is this and that—be sure to include why it's great</Radio>
                  <Radio label="1">Option two can be something else and selecting it will deselect option one</Radio>
                  <Radio label="2" disabled>Option three is disabled</Radio>
                </RadioGroup>
              </Col>
              <Col span="24">
                <h3>Select</h3>
                <Select value="option1">
                  <Option value="option1" label="option1">option1</Option>
                  <Option value="option2" label="option2">option2</Option>
                  <Option value="option3" label="option3">option3</Option>
                  <Option value="option4" label="option4">option4</Option>
                  <Option value="option5" label="option5">option5</Option>
                </Select>
              </Col>
              <Col span="24">
                <h3>Select Disabled</h3>
                <Select value="option1" disabled>
                  <Option value="option1" label="option1">option1</Option>
                </Select>
              </Col>
              <Col span="24">
                <h3>Select Multiple</h3>
                  <select multiple="multiple" size="4" class="multiple" style="">
                    <option>option1</option>
                    <option>option2</option>
                    <option>option3</option>
                    <option>option4</option>
                    <option>option5</option>
                  </select>
              </Col>
              <Col span="24">
                <h3>Select Multiple Disabled</h3>
                  <select multiple="multiple" disabled size="4" class="disabled" style="">
                    <option>option1</option>
                    <option>option2</option>
                    <option>option3</option>
                    <option>option4</option>
                    <option>option5</option>
                  </select>
              </Col>
            </Row>
          </Col>
        </Row>
        <br>
    </div>
</template>

<script>
    export default {
        name: "Forms"
    }
</script>

<style scoped>
  .div-model {
    background: #fff;
    padding: 10px;
    border-top: 3px solid #d2d6de;
    border-radius: 3px;
  }
  .div-model>.ivu-col {
    margin-bottom: 15px;
  }
  .div-model>.box-header {
    padding-bottom: 3px;
    border-bottom: 1px solid #eee;
    font-size: 20px;
    margin-bottom: 9px;
  }
  .div-model>.box-footer {
    margin-bottom: 0;
    border-top: 1px solid #eee;
    padding-top: 10px;
  }
  .ivu-checkbox-wrapper, .ivu-radio-wrapper {
    margin-right: 0;
  }
  h4 {
    font-size: 20px;
    font-weight: 500;
  }
  .input-icons {
    font-size: 20px;
  }
  code {
    padding: 2px 4px;
    font-size: 90%;
    color: #c7254e;
    background-color: #f9f2f4;
    border-radius: 4px;
  }
  .ivu-select .ivu-select-dropdown {
    min-width: 150px;
  }
  /*input-group.input-group-lg多级菜单选择框的内四角，没设置成功*/
  .ivu-select-dropdown {
    padding: 0 0;
  }
  /**/
  .login-title {
    height: 32px;
    line-height: 32px;
    text-align: right;
    padding-right: 10px;
  }
  .success, .warning, .error {
    border-radius: 4px;
  }
  .success {
    border: 1px solid #00a65a;
  }
  .warning {
    border: 1px solid #f39c12;
  }
  .error {
    border: 1px solid #dd4b39;
  }
  .multiple, .disabled {
    width: 100%;
    padding: 5px 10px;
    font-size: 14px;
    border-color: #d2d6de;
    outline: none;
  }
  .disabled {
    cursor: not-allowed;
    background: #f3f3f3;
  }
</style>

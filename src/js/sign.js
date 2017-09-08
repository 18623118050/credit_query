import './public/index'
import url from './date/url'
import {
  realName        as validate_realName,
  idCard          as validate_idCard,
  identifyCode    as validate_identifyCode
} from './public/validate'

const  base = url.base


let app = new Vue({
  el: '#sign-form',
  data: () => { // 设置成函数才可以调用$options.data()方法来清空数据
    return {
      realName: '',
      idCard: '',
      identifyCode: ''
    }
  },
  mounted: () => { // 生命周期
    vue_mounted_valid()
  }
})

function vue_mounted_valid() {
  let form_valid,
    form = $('#sign-form')

  $.validator.setDefaults({ // 只能放在validate规则配置之前

    // 提交事件
    submitHandler: () => {
      console.log('submit!')
      window.location.href = './personData.html'
      /*      let loading_modal = layer.msg('提交中...', {
       icon: 16,
       time: 0
       })*/

      /*     $.ajax({
       url: base + addCustomer,
       type: 'POST',
       data: app.$data,
       })
       .done(function (res) {
       console.log(res)

       if (typeof res === 'object') { // 成功

       layer.msg('添加渠道商成功', {
       icon: 6
       })

       setTimeout(() => {
       window.location = './index.html'
       }, 1000)
       }

       console.log("success");
       })
       .fail(function (res) {
       console.log(res)

       layer.msg('添加渠道商失败', {
       icon: 5
       })

       console.log("error");
       })
       .always(function (res) {

       catchError(res)
       console.log("complete")
       // 重置表单
       $.extend(app.$data, app.$options.data())
       layer.close(loading_modal)
       })*/

    }
  })

  // 验证
  form_valid = form.validate({
    rules: {
      realName: validate_realName,
      idCard: validate_idCard,
      identifyCode: validate_identifyCode
    }
  })

}
function protocol() {//服务协议弹窗
  let myScroll;

  function isPassive() {
    let supportsPassiveOption = false;
    try {
      addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () {
          supportsPassiveOption = true;
        }
      }));
    } catch(e) {}
    return supportsPassiveOption;
  }

  //取消body默认行为：下拉、滑动
  document.addEventListener('touchmove',  (e)=> { e.preventDefault(); }, isPassive() ? {
    capture: false,
    passive: false
  } : false);

  $('#protocol').on('click', (e) => {//触发点击事件
    e.preventDefault();

    let html = `<div class="protocol">
                  <div class="protocol_title">
                     个人信用信息服务平台服务协议
                  </div>
                    <div class="main">
                      <div class="group">
                        <p>征信中心（简称“我们”或者“征信中心”）是征信中心个人信用信息服务平台（简称“本平台”）的拥有者和营运者，为服务使用人（以下称“您”或者“用户”）提供个人信用信息在线查询服务。 为明确用户与征信中心在接受和提供本平台服务过程中的权利义务，特制订本协议。您在通过本平台查询个人信用信息前，请仔细阅读本协议的全部条款，一经点击“同意”，则协议生效。如果您是本平台的日常用户，请随时关注本协议的更新。</p>
                      </div>
                      <div class="group">
                        <p>第一条 用户的权利和义务</p>
                        <p>（一）用户必须为年满18岁并具有完全民事行为能力的自然人。</p>
                        <p>（二）用户点击“同意”，即是向征信中心证明、声明和保证用户为所查询信用信息的主体，并应遵守本协议的相关规定。</p>
                        <p>（三）用户只能查询自己的信用信息，不得要求征信中心提供他人的信用信息。</p>
                        <p>（四）用户应对以该用户名义进行的申请、查询等所有操作行为承担法律责任。</p>
                        <p>（五）用户应注意以下事项，否则用户承担由此带来的不利后果：</p>
                        <p>1.用户应向中心提供正确、完整、真实的用户注册申请资料和其它表单，并根据实际变化情况及时更新。因注册资料有误引起的后果由用户承担。</p>
                        <p>2.用户妥善保管本人信息，包括并不限于用户名、账号、密码。如因用户本人保管个人信息不善，或因用户不慎登录“钓鱼”网站、互联网邮箱系统出现安全问题，导致他人获得您的个人信息，或因此导致个人信用报告被他人取得可能导致用户遭受损失的后果由用户承担。</p>
                        <p>（六）查询获得的信用信息仅供用户了解自己的信用状况、了解信用报告上的信息是否正确、完整，并据此提出异议申请，用户不应将其作为针对征信中心及/或其工作人员的任何投诉、起诉、要求或者其他法律程序的依据。</p>
                        <p>（七）用户不得传送任何包含病毒、木马、蠕虫等可能破坏、感染、密码拦截任何系统，数据和信息的程序，不得通过黑客、密码破译等方式违法侵入计算机和网络系统，他人账户。</p>
                      </div>
                      <div class="group">
                        <p>第二条 征信中心的权利和义务</p>
                        <p>（一）征信中心有权制定中国人民银行征信中心个人信用信息服务平台查询服务的相关业务操作规范，一经在征信中心网站对外公告，该相关操作规范是本协议的有效组成部分。</p>
                        <p>（二）征信中心有权依据法律、法规、规章或业务需要对个人信用信息服务平台查询的服务内容、操作规范的任何部分进行调整，并在征信中心网站对外公告有关变更事项后实施，不另行单独通知用户。</p>
                        <p>（三）对于用户的注册申请信息，征信中心承诺只用于核实身份及从数据库中抽取正确的信用信息，不会对外提供或泄露，不会用作其他用途，但以下情况除外：</p>
                        <p>1、事先获得用户授权；</p>
                        <p>2、根据有关法律法规的要求；</p>
                        <p>3、按照相关政府主管部门的要求；</p>
                        <p>4、为维护社会公众利益；</p>
                        <p>5、为维护征信中心合法权益。</p>
                        <p>（四）为处理用户使用征信中心个人信用信息服务平台查询要求，以确定用户查询的是本人的信用信息，征信中心可查阅和使用目前由征信中心保留在系统中任何和全部用户的信用报告信息。</p>
                        <p>（五）为方便用户查询，用户可在用户身份验证环节选择与征信中心有合作关系的第三方进行验证。用户选择通过征信中心合作第三方进行验证时，征信中心不对第三方的信息采集、使用、验证行为承担法律责任，也不对验证结果的真实性、准确性承担任何义务。</p>
                        <p>（六）在任何情况下，征信中心不声明也不保证只要用户提供正确资料，就一定能通过个人信用信息服务平台获取本人相关信用信息。如征信中心发现存在泄漏用户信息的风险时，可主动采取措施暂停用户查询权限以避免用户信息泄漏。</p>
                        <p>（七）征信中心不对用户查询信息内容的正确性、适当性、完整性、准确性、可靠性或适时性做出任何证明、声明和保证。</p>
                        <p>（八）征信中心有义务建立和完善内部管理制度，并采取必要措施维护本平台的正常运行，保证按照有关业务规则公布的时间对外提供服务。</p>
                      </div>
                      <div class="group">
                        <p>第三条 不可抗力条款</p>
                        <p>因台风、地震、海啸、洪水、战争、计算机病毒感染、黑客攻击、网络通信故障等征信中心不能控制的不可抗力因素，造成平台不能正常服务而可能导致的损失，征信中心不承担责任。</p>
                      </div>
                      <div class="group">
                        <p>第四条 协议的变更和终止</p>
                        <p>鉴于网络服务的特殊性，征信中心随时变更、暂停、中止或者终止部分或全部的平台查询服务，以及本协议和附件的若干条款时，将提前通过征信中心的互联网站公告有关变更事项。如用户在征信中心发布上述协议变更的有关公告后继续使用互联网查询的，视为用户已接受协议的有关变更，并受其约束。本协议中的相关条款根据该变更而自动做相应修改，双方无须另行签订书面协议，征信中心也无需就上述服务的变更、暂停、中止或者终止向您或任何第三方承担任何责任。</p>
                      </div>
                      <div class="group">
                        <p>第五条 知识产权</p>
                        <p>（一）征信中心是个人信用信息服务平台的拥有者和营运者，与平台相关的任何内容和资源（包括但不限于文字、徽记、图案、图表、色彩、动画、声音、软件及其相互之组合）的知识产权均属于征信中心所有，受中华人民共和国《著作权法》、《商标法》《专利法》、《反不正当竞争法》及其他相关法律法规规章的保护。未经征信中心书面明确许可，任何单位和个人不得以任何方式将平台之内容和相关资源作全部或部分复制、转载、引用、编辑和建立本平台网站的镜像。</p>
                        <p>（二）用户不得在平台上上传、张贴任何受版权、商标权或其他所有权保护却未经权利人同意的材料，并须对由于侵犯版权、所有权造成的危害，或任何其他由于这种提交而导致的危害负责。</p>
                      </div>
                      <div class="group">
                        <p>第六条 网络传输风险</p>
                        <p>由于个人信用报告涉及个人隐私，通过网络提供和传输存在特定的泄密风险，用户一经充分考虑到该风险，并愿意承担该风险通过网络向征信中心查询本人的信用报告，如果因网络传输导致个人隐私泄露等后果，将由用户自行承担。</p>
                      </div>
                      <div class="group">
                        <p>第七条 法律适用条款以及争议解决方式</p>
                        <p>本协议的生效、解释、履行及争议的解决均适用中华人民共和国法律。在协议履行期间，凡由本协议引起的或与本协议有关的一切争议、纠纷，当事人应首先协商解决。协商不成，在征信中心所在地法院提起诉讼。</p>
                      </div>
                      <div class="group">
                        <p>第八条 附则</p>
                        <p>（一）若本协议中的任何条文无论因何种原因完全或部分无效或不具有执行力，本协议的其他条款仍继续有效。</p>
                        <p>（二）本协议未尽事宜，根据我国相关法律、法规及征信中心相关业务规定办理。如需制定补充协议，其法律效力同本协议。</p>
                        <p>（三）本协议自使用者点击“同意”则协议成立。</p>
                      </div>
                    </div>
                </div>`;

      layer.open({
        title: '服务协议',
        type: 1,
        area: ['90%', '90%'], //宽高
        content: html
      });

      setTimeout(() => {
        myScroll = new IScroll('.layui-layer-content');
      },0)
  })
}
protocol()
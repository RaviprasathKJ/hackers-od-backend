import Handlebars from 'handlebars';
const templateLiteral = `<!-- emailTemplate.hbs -->
<html>
<body style="width: 900px; padding: 0; margin: 0; box-sizing: border-box">
   <div style="background: gray; padding: 4%">
      <table id="content" colspan="4" style="background: white; width: 100%">
         <tr style="height: 15vh">
            <td>&nbsp;</td>
            <td colspan="2" align="center">
               <img src="https://f005.backblazeb2.com/file/conversion-mep/6275436a8908d_newhackerzblack.png" alt="logo"/>
            </td>
            <td>&nbsp;</td>
         </tr>
         <tr style="font-size: 1rem">
            <td colspan="4" style="font-family: monospace; vertical-align: center; padding: 2em;">
                 <p> Greetings,
                     <br><br>
                      {{mail_content}}
                    <br><br>
                    Cheers,
                    <br><br>
                    Team Hackerz 
                 </p>
            </td>
         </tr>
         <tr style="vertical-align: top">
            <td style="font-family: monospace; vertical-align: center; padding: 2em">
               <div style="text-align: justify">
                  <p style="margin: 4px"><b>contact</b></p>
                  <p style="margin: 2px">Aarthi : 8015639294</p>
                  <p style="margin: 2px">Santhosh : 7550055797</p>
               </div>
            </td>
            <td style="font-family: monospace; vertical-align: center; padding: 2em">
               <div style="text-align: justify">
                  <p style="margin: 4px"><b>email</b></p>
                  <p style="margin: 2px">hackerzpromotion@gmail.com</p>
               </div>
            </td>
            <td style="font-family: monospace; vertical-align: center; padding: 2em">
               <div style="text-align: justify">
                  <p style="margin: 4px"><b>visit us</b></p>
                  <p style="margin: 2px">www.hackerzcit.in/</p>
               </div>
            </td>
            <td style="font-family: monospace; vertical-align: center; padding: 2em">
               <p style="margin: 4px"><b>socials</b></p>
               <div style="display: flex;justify-content: left;margin: 4px;text-align: justify;">
                  <a href="https://www.facebook.com/hackerzcit/" >
                  <img alt="F" src="https://raw.githubusercontent.com/cittakshashila/backend/ses/docs/asserts/fb.png" style="width: 15px; height: 15px; padding: 2px" />
                  </a>
                  <a href="https://www.github.com/cittakshashila" >
                  <img alt="G" src="https://raw.githubusercontent.com/cittakshashila/backend/ses/docs/asserts/github.png" style="width: 15px; height: 15px; padding: 2px" />
                  </a>
                  <a href="https://www.instagram.com/bharathsanjeevit/" >
                  <img alt="I" src="https://raw.githubusercontent.com/cittakshashila/backend/ses/docs/asserts/insta.png" style="width: 15px; height: 15px; padding: 2px"/>
                  </a>
                  <a href="https://x.com/hackerz_cit" >
                  <img alt="T" src="https://raw.githubusercontent.com/cittakshashila/backend/ses/docs/asserts/x.png" style="width: 15px; height: 15px; padding: 2px"/>
                  </a>
               </div>
            </td>
         </tr>
         <tr>
            <td colspan="4" style="font-family: monospace; vertical-align: center; padding: 2em">
               <p style="text-align: center">
                  © 2024 Hackerz CIT. All rights reserved.
               </p>
            </td>
         </tr>
      </table>
   </div>
</body>
</html>`
export const template = Handlebars.compile(templateLiteral);

import { Box, Grid, GridItem, Image, Input, Link, List, ListItem, StackDivider, Text, VStack } from "@chakra-ui/react"
import "../style/Footer.css"

export const Footer = () => {
    const style = {
        color: "#2f4858",
        fill: "#2f4858"
    }
    return (
        <Box>
            <VStack textAlign={"left"} divider={<StackDivider borderColor='gray.200' />}>
                <VStack p={"50px 15%"} pb={"25px"}>
                    <Text width={"auto"} letterSpacing={"4px"}>SIGN UP AND GET A CHANCE TO WIN THE GIVEAWAY OF THE WEEK.</Text>
                    <Grid gap={"2%"} gridTemplateColumns={"3fr 1fr"} justify={"center"}>
                        <Input type={"text"} placeholder={"Your Email ID"} />
                        <Input bg={"#ED7745"} color={"white"} type={"submit"} value={"SUBSCRIBE"} />
                    </Grid>
                </VStack>
                <VStack align={"start"} id="listStack" padding={"40px 15%"} fontSize={"14px"}>
                    <Grid templateColumns={"1.5fr 2fr 1fr 1fr"}>
                        <VStack align={'flex-start'} divider={<StackDivider w={"50px"} borderColor='#ED7745' />}>
                            <Text fontWeight={"medium"}>The Company:</Text>
                            <Grid templateColumns={"1fr 1fr"} gap={"5%"} color={"#2f4858"}>
                                <List>
                                    <ListItem>About Us</ListItem>
                                    <ListItem>Help</ListItem>
                                    <ListItem>Blog</ListItem>
                                    <ListItem>Inside UL</ListItem>
                                </List>
                                <List>
                                    <ListItem>Careers</ListItem>
                                    <ListItem>Press</ListItem>
                                    <ListItem>Team</ListItem>
                                    <ListItem>Privacy Policy</ListItem>
                                </List>
                            </Grid>
                        </VStack>
                        <VStack align={'flex-start'} divider={<StackDivider w={"50px"} borderColor='#ED7745' />}>
                            <Text fontWeight={"medium"}>More Information:</Text>
                            <Grid templateColumns={"1fr 1fr"} width="100%" gap={"2%"} color={"#2f4858"}>
                                <List>
                                    <ListItem>Fees and Payment</ListItem>
                                    <ListItem>Shipping & Delivery</ListItem>
                                    <ListItem>Terms and Conditions</ListItem>
                                    <ListItem>Warranty, Return and Refund</ListItem>
                                </List>
                                <List>
                                    <ListItem>Contact Us</ListItem>
                                    <ListItem>Visit Us</ListItem>
                                    <ListItem>Buy In Bulk</ListItem>
                                </List>
                            </Grid>
                        </VStack>
                        <VStack align={'flex-start'} divider={<StackDivider w={"50px"} borderColor='#ED7745' />}>
                            <Text fontWeight={"medium"}>Explore More:</Text>
                            <List color={"#2f4858"}>
                                <ListItem>Refer & Earn</ListItem>
                                <ListItem>Gift Cards</ListItem>
                            </List>
                        </VStack>
                        <VStack align={'flex-start'} divider={<StackDivider w={"50px"} borderColor='#ED7745' />}>
                            <Text fontWeight={"medium"}>Address:</Text>
                            <Text color={"#2f4858"} fontSize={"12px"}>
                                Reliance Retail Limited,<br />
                                3rd Floor, Court House, Lokmanya Tilak Marg, Dhobi Talao, Mumbai- 400 002, Maharashtra, India<br />
                                CIN: U01100MH1999PLC120563
                            </Text>
                        </VStack>
                    </Grid>
                    <Grid gridTemplateColumns={"2.5fr 1fr"} width="90%">
                        <VStack align={"start"} divider={<StackDivider w={"50px"} borderColor='#ED7745' />}>
                            <Text fontWeight={"medium"}>Connect With Us:</Text>
                            <Grid height={"30px"} alignContent="center" width="50%" gridTemplateColumns={"1fr 1fr .9fr 1.2fr 1fr 1.2fr 1fr 1fr"}>
                                <GridItem height={"20px"}>
                                    <svg style={style} className="svg" height={"100%"} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 25 25"><path id="Call" d="M21.24,25H21A24.44,24.44,0,0,1,7.16,18.74h0l-.87-.87A24.44,24.44,0,0,1,0,4,2.08,2.08,0,0,1,1.33,1.83L5.82.09a1.29,1.29,0,0,1,1.6.59l3.15,5.79A1.3,1.3,0,0,1,10.35,8L7.47,10.83a.29.29,0,0,0,0,.38,29.66,29.66,0,0,0,2.89,3.6,27.16,27.16,0,0,0,3.48,2.77.29.29,0,0,0,.37,0L17,14.65a1.3,1.3,0,0,1,1.54-.23l5.79,3.15a1.3,1.3,0,0,1,.59,1.6l-1.74,4.49A2.08,2.08,0,0,1,21.24,25ZM7.85,18a23.43,23.43,0,0,0,13.26,6,1.08,1.08,0,0,0,1.13-.69L24,18.82a.29.29,0,0,0-.13-.36L18.05,15.3a.29.29,0,0,0-.35.05l-2.83,2.88a1.28,1.28,0,0,1-1.64.17,28.12,28.12,0,0,1-3.62-2.89,30.65,30.65,0,0,1-3-3.75,1.29,1.29,0,0,1,.16-1.65L9.65,7.29a.29.29,0,0,0,.05-.35L6.54,1.15A.29.29,0,0,0,6.18,1L1.69,2.76A1.08,1.08,0,0,0,1,3.89,23.44,23.44,0,0,0,7,17.16Z" /></svg>
                                </GridItem>
                                <GridItem height={"20px"}>
                                    <svg style={style} className="svg" height={"100%"} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100">
                                        <path d="M93,19H7c-1.1,0-2,0.9-2,2v58c0,0,0,0,0,0.1c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.1,0.1,0.2  c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2c0,0,0,0,0,0.1c0,0,0,0,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1  c0,0,0.1,0.1,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1s0.1,0,0.2,0.1c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2,0  c0,0,0.1,0,0.1,0h86c0.2,0,0.3,0,0.4,0c0,0,0.1,0,0.1,0c0.1,0,0.2-0.1,0.3-0.1c0,0,0.1-0.1,0.1-0.1c0.1,0,0.2-0.1,0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.1-0.1,0.2-0.2l0.1-0.1c0,0,0,0,0-0.1c0-0.1,0.1-0.1,0.1-0.2c0,0,0.1-0.1,0.1-0.2  c0-0.1,0-0.1,0.1-0.2s0-0.1,0.1-0.2c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2c0,0,0,0,0-0.1V21C95,19.9,94.1,19,93,19z M9,32.1l27,21.4  L9,74.9V32.1z M12.8,77l26.5-21l9.5,7.5c0.4,0.3,0.8,0.4,1.2,0.4s0.9-0.1,1.2-0.4l9.5-7.5l26.5,21H12.8z M91,74.9L64,53.5l27-21.4  V74.9z M91,27l-1.2,1L50,59.5L10.2,28L9,27v-4h82V27z" />
                                    </svg>
                                </GridItem>
                                <GridItem height={"20px"}>
                                    <svg style={style} className="svg" height={"100%"} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 10 20" version="1.1">
                                        <defs />
                                        <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
                                            <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -7399.000000)">
                                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                                    <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z" id="facebook-[#176]" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </GridItem>
                                <GridItem height={"20px"}>
                                    <svg className="svg" height={"100%"} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 16" version="1.1">
                                        <defs />
                                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7521.000000)" style={style} >
                                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                                    <path d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705" id="twitter-[#154]" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </GridItem>
                                <GridItem height={"20px"}>
                                    <svg style={style} className="svg" height={"100%"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" >
                                        <path fillRule="evenodd" clipRule="evenodd" d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM64.5611 29.872C61.1588 26.624 56.8025 25 51.4924 25C45.1515 25 40.1499 26.8559 36.4901 30.5677C32.8303 34.2795 31 38.4038 31 42.9408C31 48.6116 32.959 52.2458 36.8779 53.8443C37.1873 53.8443 37.4448 53.8574 37.6511 53.883C37.8574 53.9086 38.0381 53.7411 38.1925 53.3805C38.3476 53.0198 38.4507 52.7492 38.5019 52.5685C38.5531 52.3878 38.6175 52.0783 38.695 51.6401C38.7718 51.202 38.8369 50.9313 38.8881 50.8281C39.0425 50.3124 38.9137 49.7974 38.5011 49.2817C37.2122 47.7352 36.5677 45.853 36.5677 43.6365C36.5677 39.8735 37.8683 36.641 40.4718 33.9343C43.0753 31.2277 46.4908 29.8743 50.7184 29.8743C54.4813 29.8743 57.4075 30.8934 59.4953 32.9292C61.583 34.965 62.6269 37.6073 62.6269 40.8553C62.6269 45.0821 61.7769 48.6915 60.0754 51.6812C58.3738 54.671 56.2085 56.1662 53.5794 56.1662C52.0329 56.1662 50.7959 55.6117 49.8676 54.5035C48.9392 53.3952 48.6562 52.0938 49.0168 50.5986C49.2231 49.7222 49.5581 48.5488 50.0219 47.0799C50.4857 45.6102 50.8595 44.3213 51.1434 43.213C51.4264 42.1048 51.5684 41.164 51.5684 40.3908C51.5684 39.153 51.2333 38.1355 50.5632 37.3359C49.8932 36.5363 48.9392 36.1369 47.7022 36.1369C46.1558 36.1369 44.8412 36.8457 43.7586 38.2635C42.6759 39.6812 42.1346 41.4471 42.1346 43.5605C42.1346 45.3644 42.444 46.8596 43.0629 48.0455L39.4287 63.7434C38.7586 66.63 38.7322 70.265 39.3511 74.6468C39.4543 75.0586 39.6606 75.1106 39.97 74.8012C42.5999 71.5012 44.3263 68.3563 45.1515 65.3666C45.4089 64.5422 46.079 61.9131 47.1617 57.4793C47.6774 58.4588 48.6058 59.3088 49.9459 60.0308C51.2861 60.7528 52.7038 61.1135 54.199 61.1135C58.7352 61.1135 62.447 59.2576 65.3344 55.5458C68.2217 51.834 69.665 47.1171 69.665 41.3943C69.665 36.9605 67.9635 33.12 64.5611 29.872Z" />
                                    </svg>
                                </GridItem>
                                <GridItem height={"20px"}>
                                    <svg className="svg" height={"100%"} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 14" version="1.1">
                                        <defs />
                                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)" style={style} >
                                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                                    <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289" id="youtube-[#168]" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </GridItem>
                                <GridItem height={"20px"}>
                                    <svg className="svg" height={"100%"} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" version="1.1">
                                        <defs />
                                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7439.000000)" style={style} >
                                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                                    <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792" id="instagram-[#167]" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </GridItem>
                                <GridItem height={"20px"}>
                                    <svg className="svg" height={"100%"} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 72 72" version="1.1">
                                        <defs />
                                        <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
                                            <g id="Social-Icons---Rounded-Black" transform="translate(-376.000000, -267.000000)">
                                                <g id="Linkedin" transform="translate(376.000000, 267.000000)" >
                                                    <path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" id="Rounded" style={style} />
                                                    <path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="#FFFFFF" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </GridItem>
                            </Grid>
                        </VStack>
                        <VStack align={"start"} divider={<StackDivider w={"50px"} borderColor='#ED7745' />}>
                            <Text>Download App:</Text>
                            <Grid gridTemplateColumns={"1fr 1fr"}>
                                <Link target={"_blank"} href="https://itunes.apple.com/us/app/urban-ladder/id959886087">
                                    <Image height={"100%"} src="https://www.ulcdn.net/media/badges/app_store/app_store_badge.svg" alt="https://www.ulcdn.net/media/badges/app_store/app_store_badge.svg" />
                                </Link>
                                <Link target={"_blank"} href="https://play.google.com/store/apps/details?id=com.urbanladder.catalog">
                                    <Image height={"100%"} src="https://www.ulcdn.net/media/badges/play_store/google-play-badge.png" alt="https://www.ulcdn.net/media/badges/play_store/google-play-badge.png" />
                                </Link>
                            </Grid>
                        </VStack>
                    </Grid>
                </VStack>
                <VStack bg={"#2f4858"} color="white" id="stack3Footer">
                    <VStack spacing={"20px"} fontSize={"14px"} padding={"50px 15%"}>
                        <Grid templateColumns={"1fr 3fr"}>
                            <GridItem>Popular Furniture Categories:</GridItem>
                            <GridItem>
                                Bed , Beds By Design , Sofa Set , Wooden Sofa , Sofas By Design , Sofa Cum Bed , Double Bed , Single Bed , Queen Size Bed , King Size Bed , Chair , Wooden Table , Study Table , Study Chair , Wardrobe , Chest of Drawers , Futon , Loveseat , Dining Table Set , Dining Chair , Bookshelves , Shoe Rack , TV Units , Recliners , Furniture , Office Furniture , Office Table , Office Chair , 2 Seater Sofa , TV Cupboard , TV Showcase , TV Stand , Center Table</GridItem>
                        </Grid>
                        <Grid templateColumns={"1fr 3fr"}>
                            <GridItem>Shop Furniture By Room:</GridItem>
                            <GridItem>Living Room Furniture , Bedroom Furniture , Dining Room Furniture , Study Room Furniture , Bar Furniture , Balcony Furniture</GridItem>
                        </Grid>
                        <Grid templateColumns={"1fr 3fr"}>
                            <GridItem>Popular Decor Categories:</GridItem>
                            <GridItem>Home Decor , Carpets , Mirrors , Study Lamps , Table Lamps , Bed Sheets , Floor Lamps , Wall Lights , Lighting , Ceiling Lights , Quilt , Wall Decor , Wall Mirror , Table Decor , Table Cover , Table Napkin , Table Mat , Cushion Cover , Table Runners , Home Furnishing , Wall Art , Showpiece , Artificial Plants , Photo Frame , Candle Stand , Clocks , Wall Clocks , Festive Lights , Candles , Bath Mat , Vases , Flower Vase , Bathroom Accessories , Bathroom Mirrors</GridItem>
                        </Grid>
                        <Grid templateColumns={"1fr 3fr"}>
                            <GridItem>Popular Mattress Categories:</GridItem>
                            <GridItem>Mattresses , Single Bed Mattresses , Double Bed Mattresses , King Size Mattresses , Queen Size Mattresses , Foam Mattress , Coir Mattress , Latex Mattress , Spring Mattress , Orthopaedic Mattress</GridItem>
                        </Grid>
                        <Grid templateColumns={"1fr 3fr"}>
                            <GridItem>Popular Tableware Categories:</GridItem>
                            <GridItem>Shot Glass , Dinner Plates , Baking Tray , Forks , Dinner Set , Tumbler , Drinking Glass , Cutlery Holder , Tissue Holder , Bottle Opener , Spoons , Whiskey Glass , Kitchen Organizers , Hot Pot , Chef's Cap , Glass Jars , Kitchen Gloves , Kitchen Storage Containers , Bar Tools , Masala Box , Glass Bottles , Coasters , Cutlery Set , Knives Set , Oven Gloves , Aprons , Cake Stand , Fruit Basket , Spice Box , Beer Glass , Bowls , Oil Dispenser , Housewarming Gifts</GridItem>
                        </Grid>
                        <Grid templateColumns={"1fr 3fr"}>
                            <GridItem>Delivering in:</GridItem>
                            <GridItem>Aanamalai , Ahmedabad , Alappuzha , Aler , Alibaug , Alleppey , Ambala , Ambarnath , Amdapur , Amtala , Anand , Anikorai , Arakkonam , Arimpur , Arnala , Arutla , Asansol , Athikunna , Athipalli , Aurangabad , Avanshi </GridItem>
                        </Grid>
                        <Text pt={"20px"} textAlign={"center"}>
                            © 2012-2023 URBAN LADDER
                        </Text>
                    </VStack>
                </VStack>
            </VStack>
        </Box>
    )
}
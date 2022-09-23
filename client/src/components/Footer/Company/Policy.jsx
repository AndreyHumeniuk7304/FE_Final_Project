import { Box, List, Typography } from "@mui/material";

const PolicyWebSite = () => {
  return (
    <Box p={{ mobile: 1, desktop: 5 }}>
      <Box
        component="h5"
        textTransform="uppercase"
        textAlign="center"
        p={4}
        fontWeight="bold"
        fontSize={20}
      >
        PRIVACY POLICY
      </Box>
      <Typography pb={1}>
        Welcome to Originalite. As used in these service terms, “we” or
        “Originalite” means ACI Gift Cards LLC and “you” means the individual or
        entity submitting digital images, videos, audio, text or other content
        (“Content”) to be displayed on an electronic Originalite.com Gift Card,
        electronic message or other similar product or service (the “Service”).
        Any individual or entity that wants to use the Service must accept these
        service terms without change. BY CLICKING THE “USE THIS DESIGN” BUTTON,
        OR SUBMITTING CONTENT TO Originalite, YOU AGREE TO BE BOUND BY THESE
        SERVICE TERMS, THE Originalite.COM PRIVACY NOTICE AND CONDITIONS OF USE
        AND ALL CONTENT GUIDELINES.
      </Typography>
      <List>
        <Typography pb={1} component="li">
          Customization. You can submit your own materials, including
          photographs, illustrations, graphics, audio, video and text, and
          select from a gallery of images to create customized Originalite.com
          Gift Cards, electronic messages or other similar products or services.
          You may only submit materials for which you own all rights or you must
          have the authorization of the person who does own those rights.
        </Typography>
        <Typography pb={1} component="li">
          License Grant for Your Materials. You hereby grant to Originalite, its
          affiliates and sublicensees (including third-parties who provide the
          Service and related services) a worldwide, nonexclusive, royalty-free,
          perpetual right and license, in connection with your use of the
          Service, to (a) reproduce, distribute, transmit, perform and display
          the Content and materials you submit, in any manner and media,
          including all trademarks, trade names, and the names and likenesses of
          any individuals that appear in the Content and your materials; (b)
          modify, adapt, translate and create derivative works from the Content
          or those materials, in any manner and media; and (c) sublicense the
          foregoing rights to any third party, with or without a fee.
        </Typography>
        <Typography pb={1} component="li">
          Guidelines and Restrictions. You agree to submit materials to us in
          accordance with all guidelines for use posted on the Originalite.com
          web site or of which you are otherwise notified (“Guidelines”). In
          particular, you agree not to submit Content or materials that are
          unlawful, pornographic, libelous, defamatory, tortious, obscene or
          racially, ethnically or otherwise objectionable or that otherwise
          violate general Originalite.com community standards. We expressly
          reserve the right to remove or not accept, use or transmit any Content
          or materials that we deem to be in violation of these service terms,
          applicable laws or our community standards in our sole discretion.
        </Typography>
        <Typography pb={1} component="li">
          Representations, Warranties and Indemnities. You represent and warrant
          to Originalite and its affiliates and sublicensees that (a) you have
          the right to grant the licenses set forth in these service terms,
          including all rights necessary for the reproduction, distribution,
          performance and other use of the Content and materials by Originalite
          and its affiliates and sublicensees as permitted in these service
          terms, and (b) the Content and materials you submit, and Originalite
          and its affiliates and sublicensees exercise of their rights under
          these service terms, do not and will not violate, misappropriate or
          infringe any intellectual property right, including but not limited to
          trademark rights, copyrights, moral rights or publicity rights of any
          third party. You agree to indemnify, defend, and hold Originalite and
          its affiliates and sublicensees harmless from all claims, liabilities,
          damages, and expenses (including, without limitation, reasonable
          attorneys fees and expenses) arising from any breach of these service
          terms.
        </Typography>
        <Typography pb={1} component="li">
          Originalite Intellectual Property. Without our prior written consent,
          you may not use our or our affiliates intellectual property including,
          without limitation, any of our trademarks, trade names, trade dress,
          or copyrighted material, in any manner. These service terms and your
          use of the Service do not grant you any license to or right in such
          intellectual property, except the opportunity to use the Service
          featuring such intellectual property.
        </Typography>
        <Typography pb={1} component="li">
          Other Terms. The Originalite.com Privacy Notice and Conditions of Use
          and the Guidelines for the Service, including in each case all future
          changes, are incorporated by reference into these service terms.
        </Typography>
      </List>
    </Box>
  );
};

export default PolicyWebSite;

import React from 'react';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import Heading from 'components/Heading';
import Text from 'components/Text';
import DownloadsTable from 'components/DownloadTableSimple';

import content from './content';

const BBS = () => (
  <div>
    <Container>
      <Heading heavy as="h2" fontSize={[5, 6]} color="black" mb={[4, 6]}>
        <FormattedMessage id="downloads.bbs.heading" />
      </Heading>

      <Text fontSize={[3, 3, 4]} color="black" heavy mb={[5, 7]}>
        <FormattedMessage id="downloads.bbs.lead" />
      </Text>

      <DownloadsTable list={content} />
    </Container>
  </div>
);

export default BBS;

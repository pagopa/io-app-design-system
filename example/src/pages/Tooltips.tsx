import React, { useState } from 'react';
import { ButtonSolid, IOVisualCostants, Tooltip, VSpacer } from '@pagopa/io-app-design-system';
import { View } from 'react-native';
import { Screen } from '../components/Screen';

const Tooltips = () => {
  const [isTopVisible, setIsTopVisible] = useState(false);
  const [isBottomVisible, setIsBottomVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);
  const [isLeftVisible, setIsLeftVisible] = useState(false);

  return (
    <Screen>
      <View style={{ paddingVertical: IOVisualCostants.appMarginDefault }}>
        <Tooltip
          placement='bottom'
          title='Bottom Tooltip'
          content='Some bottom tooltip content'
          isVisible={isBottomVisible}
          onClose={() => setIsBottomVisible(false)}
          closeIconAccessibilityLabel=''
        >
          <ButtonSolid fullWidth label='Bottom' onPress={() => setIsBottomVisible(true)} />
        </Tooltip>
        <VSpacer />
        <Tooltip
          isVisible={isTopVisible}
          title='Top Tooltip'
          content='Some top tooltip content'
          onClose={() => setIsTopVisible(false)}
          closeIconAccessibilityLabel=''
        >
          <ButtonSolid fullWidth label='Top' onPress={() => setIsTopVisible(true)} />
        </Tooltip>
        <VSpacer />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Tooltip
            placement='right'
            isVisible={isRightVisible}
            title='Right Tooltip'
            content='Some right tooltip content'
            onClose={() => setIsRightVisible(false)}
            closeIconAccessibilityLabel=''
          >
            <ButtonSolid fullWidth label='Right' onPress={() => setIsRightVisible(true)} />
          </Tooltip>
          <Tooltip
            placement='left'
            isVisible={isLeftVisible}
            title='Left Tooltip'
            content='Some left tooltip content'
            onClose={() => setIsLeftVisible(false)}
            closeIconAccessibilityLabel=''
          >
            <ButtonSolid fullWidth label='Left' onPress={() => setIsLeftVisible(true)} />
          </Tooltip>
        </View>
      </View>
    </Screen>
  );
};

export default Tooltips;
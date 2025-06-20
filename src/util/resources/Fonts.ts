import Dimens from '@dimens';
import { TextStyle } from 'react-native';

// TODO: Usually, our designers calls the fonts like H1, H2, H3, Body, Subtitle, etc. so you can expand here. Also
const H1 = {
    fontFamily: 'RethinkSans-SemiBold',
    fontWeight: Dimens.fontWeightBold,
    fontSize: Dimens.fontSizeX8Large,
    lineHeight: Dimens.lineHeightLargest,
} as TextStyle;

const H3 = {
    fontFamily: 'RethinkSans-SemiBold',
    fontWeight: Dimens.fontWeightSemiBold600,
    fontSize: Dimens.fontSizeXLarge,
    lineHeight: Dimens.lineHeightXLarge,
} as TextStyle;

const Subtitle = {
    fontFamily: 'RethinkSans-SemiBold',
    fontWeight: Dimens.fontWeightSemiBold600,
    fontSize: Dimens.fontSizeMedium,
    lineHeight: Dimens.lineHeightLarge,
} as TextStyle;

const SubtitleSmall = {
    fontFamily: 'RethinkSans-SemiBold',
    fontWeight: Dimens.fontWeightSemiBold600,
    fontSize: Dimens.fontSizeNormal,
    lineHeight: Dimens.lineHeightMedium,
} as TextStyle;

const Body = {
    fontFamily: 'RethinkSans-Regular',
    fontWeight: Dimens.fontWeightRegular400,
    fontSize: Dimens.fontSizeMedium,
    lineHeight: Dimens.lineHeightLarge,
};

const Caption = {
    fontFamily: 'RethinkSans-Regular',
    fontWeight: Dimens.fontWeightMedium500,
    fontSize: Dimens.fontSizeSmall,
    lineHeight: Dimens.lineHeightNormal,
} as TextStyle;

export default {
    H1,
    H3,
    Subtitle,
    SubtitleSmall,
    Body,
    Caption,
};

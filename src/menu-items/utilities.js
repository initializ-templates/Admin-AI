// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  PushpinOutlined,
  PictureOutlined,
  AudioOutlined,
  LoadingOutlined
} from '@ant-design/icons';

// icons
const icons = {
  AudioOutlined,
  PictureOutlined,
  PushpinOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
  id: 'utilities',
  type: 'group',
  children: [
    {
      id: 'picture-generator',
      title: 'Image Generator Model',
      type: 'item',
      url: '/picture-page',
      icon: icons.PictureOutlined
    },
    {
      id: 'typography',
      title: 'Typography',
      type: 'item',
      url: '/typography',
      icon: icons.AudioOutlined
    },
    {
      id: 'shadow',
      title: 'Shadows',
      type: 'item',
      url: '/shadow',
      icon: icons.PushpinOutlined
    },
    {
      id: 'icons',
      title: 'Icons',
      type: 'item',
      url: '/icons/ant',
      icon: icons.AntDesignOutlined,
      breadcrumbs: false
    }
  ]
};

export default utilities;

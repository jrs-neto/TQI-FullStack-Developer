import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import styled from 'styled-components';

export const TabsWrapper = styled(Tabs)`
    font-size: 16px;
    width: 100%;
    margin-top: 16px;
`;

export const TabListWrapper = styled(TabList)`
    list-style-type: none;
    padding: 4px;
    display: flex;
    margin: 0;
`;
TabListWrapper.tabsRole = 'TabList';

export const TabWrapper = styled(Tab)`
    border: 1px solid #ccc;
    border-radius: 16px;
    padding: 12px;
    user-select: none;
    cursor: pointer;
    z-index: 99999;
    background-color: #fff;
    margin: 8px;
    transition: all .3s ease-in-out;

    &:focus {
        outline: none;
    }

    &.is-selected {
        box-shadow: 5px 3px 8px rgba(0, 0, 0, .5);
    }
`;
TabWrapper.tabsRole = 'Tab';

export const TabPanelWrapper = styled(TabPanel)`
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    min-height: 50vh;
    display: none;
    margin-top: -5px;

    &.is-selected {
        display: block;
    }
`;
TabPanelWrapper.tabsRole = 'TabPanel';

export const ListWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;
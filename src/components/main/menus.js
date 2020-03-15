import Home from '../pages/homePage/home2';
import ProjectList from '../pages/projectManage/projectList';
import ProjectApply from '../pages/projectManage/projectApply';
import ProjectPlan from '../pages/projectManage/projectPlan';
import ProjectAssessment from '../pages/projectManage/projectAssessment';

import Jbntbt from '../pages/gh/jbntbt';
import Ghztbg from '../pages/gh/ghztbg';
import Btgl from '../pages/gh/btgl';

import OneMap from '../pages/oneMap/special';

import DataQuery from '../pages/dataManage/dataQuery';
import DataStatistics from '../pages/dataManage/dataStatistics';

import FileList from '../pages/archivesManage/fileList';
import Preserve from '../pages/archivesManage/preserve';

import List from '../pages/dynamicManage/list';
import Warn from '../pages/dynamicManage/warn';

import UserList from '../pages/userManage/userList';
import RightHandle from '../pages/userManage/rightHandle';

import Handle from '../pages/logManage/handle';
import System from '../pages/logManage/system';

import Qygcsl from "../pages/homePage/home2/pages/qygcsl";
import Ntjsgh from "../pages/homePage/home2/pages/ntjsgh";
import Jsqk from "../pages/homePage/home2/pages/jsqk";
import Jsfx from "../pages/homePage/home2/pages/jsfx";
import Gczjzb from "../pages/homePage/home2/pages/gczjzb";
import Gbzntzb from "../pages/homePage/home2/pages/gbzntzb";

export const sideMenus = [{
    name: '首页',
    key: "homePage",
    icon:"home",
    //icon: '/images/农田建设_首页_03.png',
    childs: [{
        name: "首页展示",
        key: "home",
        component: Home
    }]
}, {
    name: '项目管理',
    key: "projectManage",
    icon:"credit-card",
    //icon: '/images/农田建设_首页_06.png',
    childs: [{
        name: '项目列表',
        key: "projectList",
        component: ProjectList
    }, {
        name: '项目申请',
        key: "projectApply",
        component: ProjectApply
    }, {
        name: '项目规划',
        key: "projectPlan",
        component: ProjectPlan
    }, {
        name: '项目评估',
        key: "projectAssessment",
        component: ProjectAssessment
    }]
}, {
    name: '管护业务',
    key: "gh",
    icon:"tool",
    //icon: '/images/农田建设_首页_18.png',
    childs: [{
        name: "管护主体变更",
        key: "ghztbg",
        component: Ghztbg
    },{
        name: "基本农田补贴",
        key: "jbntbt",
        component: Jbntbt
    }, {
        name: "补贴管理",
        key: "btgl",
        component: Btgl
    }]
}, {
    name: '一张图',
    key: "oneMap",
    icon:"bar-chart",
    //icon: '/images/农田建设_首页_12.png',
    childs: [{
        name: "专题视图",
        key: "special",
        component: OneMap
    }]
}, {
    name: '数据管理',
    key: "dataManage",
    icon:"share-alt",
    //icon: '/images/农田建设_首页_08.png',
    childs: [{
        name: "数据查询",
        key: "dataQuery",
        component: DataQuery
    }, {
        name: "数据统计",
        key: "datatatistics",
        component: DataStatistics
    }]
}, {
    name: '档案管理',
    key: "archivesManage",
    icon:"hdd",
    //icon: '/images/农田建设_首页_10.png',
    childs: [{
        name: "档案列表",
        key: "fileList",
        component: FileList
    }, {
        name: "档案维护",
        key: "preserve",
        component: Preserve
    }]
}, {
    name: '动态监管',
    key: "dynamicManage",
    icon:"hourglass",
    //icon: '/images/农田建设_首页_16.png',
    childs: [{
        name: "监管列表",
        key: "list",
        component: List
    }, {
        name: "预警分析",
        key: "warn",
        component: Warn
    }]
},{
    name: '用户管理',
    key: "userManage",
    icon:"user",
    //icon: '/images/农田建设_首页_20.png',
    childs: [{
        name: "用户列表",
        key: "userList",
        component: UserList
    }, {
        name: "权限管理",
        key: "rightHandle",
        component: RightHandle
    }]
},{
    name: '日志管理',
    key: "logManage",
    icon:"calendar",
    //icon: '/images/农田建设_首页_212.png',
    childs: [{
        name: "操作日志",
        key: "handle",
        component: Handle
    }, {
        name: "系统日志",
        key: "system",
        component: System
    }]
}]

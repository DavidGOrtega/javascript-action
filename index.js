const core = require('@actions/core');
const github = require('@actions/github');

const util = require('util');
const exec = util.promisify(require('child_process').exec);

const fs = require('fs');
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

const imgur = require('imgur');
imgur.setClientId('9ae2688f25fae09');

const github_token = core.getInput('github_token');
const dvc_repro_file = core.getInput('dvc_repro_file');
const dvc_repro_skip = core.getInput('dvc_repro_skip') === 'true';
const skip_ci = core.getInput('skip_ci');

const GITHUB_SHA = process.env.GITHUB_SHA;
const GITHUB_REPOSITORY = process.env.GITHUB_REPOSITORY;

const STUB = process.env.STUB === 'true';

const [owner, repo] = GITHUB_REPOSITORY.split('/');
const octokit = new github.GitHub(github_token);


// most @actions toolkit packages have async methods
async function run() {
  try { 
    const ms = core.getInput('milliseconds');
    console.log(`Waiting ${ms} milliseconds ...`)

    core.setOutput('time', new Date().toTimeString());
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()

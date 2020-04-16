#!/usr/bin/env python3
''' Grab a portable version of base24 builder '''
import os
import shutil
import asyncio

GIT_CLONE_PATH = "base24-builder-python-portable"


async def git_clone():
	''' clone base24-builder-python-portable '''
	proc_env = os.environ.copy()
	proc_env["GIT_TERMINAL_PROMPT"] = "0"

	git_proc = await asyncio.create_subprocess_exec(
	"git",
	"clone",
	"https://github.com/Base24/base24-builder-python-portable",
	GIT_CLONE_PATH,
	stderr=asyncio.subprocess.PIPE,
	env=proc_env)
	_stdout, _stderr = await git_proc.communicate()
	if git_proc.returncode != 0:
		# remove created directory if it's empty
		try:
			os.rmdir(GIT_CLONE_PATH)
		except OSError:
			pass


def copy_dropin():
	''' copy base24_builder/* and base24 '''
	builder_dir = os.path.join(os.getcwd(), GIT_CLONE_PATH, "base24_builder")
	os.makedirs(os.path.join(os.getcwd(), "base24_builder"), exist_ok=True)
	for item in os.listdir(builder_dir):
		shutil.copy2(os.path.join(builder_dir, item),
		os.path.join(os.getcwd(), "base24_builder", item))
	shutil.copy2(os.path.join(os.getcwd(), GIT_CLONE_PATH, "base24.py"),
	os.path.join(os.getcwd(), "base24.py"))


asyncio.get_event_loop().run_until_complete(git_clone())
copy_dropin()

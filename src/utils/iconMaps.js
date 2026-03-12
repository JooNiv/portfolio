import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from 'solid-icons/ai'

import { MdFillContent_cut } from 'solid-icons/md'
import { CgWebsite } from 'solid-icons/cg'
import { VsSearchFuzzy } from 'solid-icons/vs'
import { FaBrandsReact } from 'solid-icons/fa'
import { BiRegularServer } from 'solid-icons/bi'
import { TbFillMoodHappy } from 'solid-icons/tb'
import { FaSolidGamepad } from 'solid-icons/fa'
import { AiOutlineCloudServer } from 'solid-icons/ai'

export const projectIconMap = {
    qcut: MdFillContent_cut,
    portfolio: CgWebsite,
    portfoliobackend: BiRegularServer,
    qcutfind: VsSearchFuzzy,
    fiqciweb: FaBrandsReact,
    entanglementgamefrontend: FaSolidGamepad,
    entanglementgamebackend: AiOutlineCloudServer,
    moodpixels: TbFillMoodHappy,
}

export const contactIconMap = {
    email: AiOutlineMail,
    github: AiFillGithub,
    linkedin: AiFillLinkedin,
}